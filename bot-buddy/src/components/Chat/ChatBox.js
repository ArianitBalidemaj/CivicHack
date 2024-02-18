import React from 'react';
import './ChatBox.scss';

const ChatBox = ({ chatId, onClose, onChatSelect }) => {
  const handleChatClick = () => {
    onChatSelect(chatId);
  };

  const handleDeleteClick = () => {
    const confirmDeletion = window.confirm('Are you sure you want to delete this chat?');
    if (confirmDeletion) {
      onClose(chatId);
    }
  };

  const handleReportClick = () => {
    const reportDetails = prompt('Please provide details for reporting this chat:');
    if (reportDetails) {
      console.log('Report details:', reportDetails);
    }
  };

  return (
    <div className="chat-box" onClick={handleChatClick}>
      <span className="chat-text">Chat {chatId}</span>
      <div className="action-buttons">
        <button className="report-button" onClick={handleReportClick}>
          !
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
