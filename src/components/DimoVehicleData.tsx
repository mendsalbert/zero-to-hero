'use client'
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { getUserDevices, getDeviceData } from '@/utils/dimoApi';

interface VehicleData {
  vin: string;
  make: string;
  model: string;
  year: number;
  odometer: number;
  fuelLevel: number;
}

const DimoVehicleData: React.FC = () => {
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const devices = await getUserDevices();
        if (devices.length > 0) {
          const deviceId = devices[0].id;
          const data = await getDeviceData(deviceId);
          setVehicleData({
            vin: data.vin || 'N/A',
            make: data.make || 'N/A',
            model: data.model || 'N/A',
            year: data.year || 'N/A',
            odometer: data.odometer || 0,
            fuelLevel: data.fuelPercentRemaining * 100 || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching DIMO vehicle data:', error);
      }
    };

    fetchVehicleData();
  }, []);

  if (!vehicleData) {
    return <div className="h-48 flex items-center justify-center">Loading vehicle data...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <Car className="h-8 w-8 text-blue-500 mr-3" />
        <h2 className="text-xl font-semibold text-gray-800">Vehicle Data</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">VIN</p>
          <p className="font-medium">{vehicleData.vin}</p>
        </div>
        <div>
          <p className="text-gray-600">Make</p>
          <p className="font-medium">{vehicleData.make}</p>
        </div>
        <div>
          <p className="text-gray-600">Model</p>
          <p className="font-medium">{vehicleData.model}</p>
        </div>
        <div>
          <p className="text-gray-600">Year</p>
          <p className="font-medium">{vehicleData.year}</p>
        </div>
        <div>
          <p className="text-gray-600">Odometer</p>
          <p className="font-medium">{vehicleData.odometer.toLocaleString()} miles</p>
        </div>
        <div>
          <p className="text-gray-600">Fuel Level</p>
          <p className="font-medium">{vehicleData.fuelLevel.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default DimoVehicleData;