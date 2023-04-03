import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationIcon, NotificationList, NotificationMessage, UnreadCount,MarkAsRead , Notification } from '../styles/notification.styles.jsx';

function NotificationComponent() {
  // const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Notification 1', type: 'success' },
    { id: 2, message: 'Notification 2', type: 'danger' },
    { id: 3, message: 'Notification 3', type: 'warning' },
]);
  const [unreadCount, setUnreadCount] = useState(0);
 

  useEffect(() => {   
       fetch('/api/notifications')
      .then(res => res.json())
      .then(data => {
        setNotifications(data);
        setUnreadCount(data.filter(n => !n.read).length);
      });     
  }, []);

  const handleClick = () => {
    setShowNotifications(!showNotifications);
  };

  

  return (
    <div>
      <NotificationIcon onClick={handleClick}>
        <UnreadCount>{unreadCount}</UnreadCount>
        <i className="fas fa-bell"><FontAwesomeIcon icon={faBell}/></i>
      </NotificationIcon>
      
      <NotificationList clicked = {showNotifications}>
        {notifications.map(notification => (
          <Notification key={notification.id} className={`notification ${!notification.read ? 'unread' : ''}`}>
            <NotificationMessage>{notification.message}</NotificationMessage>
            <p className="time">{notification.time}</p>
            <MarkAsRead >Mark as Read</MarkAsRead>
            {/* onClick={() => markAsRead(notification._id)} */}
          </Notification>
        ))}
      </NotificationList>
    </div>
  );

//   function markAsRead(id) {
//     // Make a PUT request to the API to mark the notification as read
//     fetch(`/api/notifications/${id}`, {
//       method: 'PUT',
//     })
//     .then(res => res.json())
//     .then(data => {
//       setNotifications(prevNotifications => prevNotifications.map(n => {
//         if(n._id === id) {
//           return {...n, read: true};
//         }
//         return n;
//       }));
//       setUnreadCount(prevCount => prevCount - 1);
//     });
//   }
  }

export default NotificationComponent;
