'use client'
import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { getUserDevices, getDeviceData, getDeviceTrips } from '@/utils/dimoApi';

interface EcoScoreData {
  score: number;
  fuelEfficiency: number;
  ecoFriendlyTrips: number;
}

const DimoEcoScore: React.FC = () => {
  const [ecoScoreData, setEcoScoreData] = useState<EcoScoreData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEcoScoreData = async () => {
      try {
        const devices = await getUserDevices();
        if (devices.length > 0) {
          const deviceId = devices[0].id;
          const data = await getDeviceData(deviceId);
          const trips = await getDeviceTrips(deviceId);
          
          // Calculate eco-score based on DIMO data
          const fuelEfficiency = data.fuelPercentRemaining || 0;
          const ecoFriendlyTrips = trips.trips.filter((trip: any) => trip.averageSpeed < 60).length || 0;
          const score = Math.min(100, Math.round((fuelEfficiency * 10) + (ecoFriendlyTrips * 2)));

          setEcoScoreData({
            score,
            fuelEfficiency,
            ecoFriendlyTrips,
          });
        }
      } catch (error) {
        console.error('Error fetching DIMO eco-score data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEcoScoreData();
  }, []);

  if (loading) {
    return <div className="h-48 flex items-center justify-center">Loading eco-score...</div>;
  }

  if (!ecoScoreData) {
    return <div className="h-48 flex items-center justify-center">No eco-score data available</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <Leaf className="h-8 w-8 text-green-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Eco Score</h3>
      </div>
      <div className="flex items-end">
        <p className="text-5xl font-bold text-green-600">{ecoScoreData.score}</p>
        <p className="ml-2 text-gray-500 mb-1">/100</p>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Fuel Efficiency: {ecoScoreData.fuelEfficiency.toFixed(2)}%</p>
        <p>Eco-Friendly Trips: {ecoScoreData.ecoFriendlyTrips}</p>
      </div>
    </div>
  );
};

export default DimoEcoScore;