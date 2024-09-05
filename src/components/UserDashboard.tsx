import { useState, useEffect } from 'react';
import { getOrCreateReward, getUnreadNotifications, markNotificationAsRead } from '@/utils/db/actions';

export function UserDashboard({ userId }: { userId: number }) {
  const [reward, setReward] = useState<{ points: number; level: number } | null>(null);
  const [notifications, setNotifications] = useState<Array<{ id: number; message: string; type: string }>>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userReward = await getOrCreateReward(userId);
      setReward(userReward);

      const userNotifications = await getUnreadNotifications(userId);
      setNotifications(userNotifications);
    };

    fetchUserData();
  }, [userId]);

  const handleNotificationRead = async (notificationId: number) => {
    await markNotificationAsRead(notificationId);
    setNotifications(notifications.filter(n => n.id !== notificationId));
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      {reward && (
        <div>
          <p>Points: {reward.points}</p>
          <p>Level: {reward.level}</p>
        </div>
      )}
      <h3>Notifications</h3>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => handleNotificationRead(notification.id)}>Mark as Read</button>
          </li>
        ))}
      </ul>
    </div>
  );
}