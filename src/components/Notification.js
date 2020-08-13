import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Ooops! You have already entered this letter</p>
    </div>
  )
}

export default Notification
