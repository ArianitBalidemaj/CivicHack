import React from 'react';

const ChatBox = ({ chatId, onClose, onChatSelect }) => {
  const handleChatClick = () => {
    onChatSelect(chatId);
  };

  return (
    <div className="chat-box" onClick={handleChatClick}>
      <span className="chat-title">Chat {chatId}</span>
      <button className="close-button" onClick={() => onClose(chatId)}>
        {/* Add your close button content */}
        X
      </button>
    </div>
  );
};

export default ChatBox;
