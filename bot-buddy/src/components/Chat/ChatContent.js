import React from 'react';
import './ChatContent.scss'; 

const ChatContent = ({ activeChat }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle sending the message
  };

  return (
    <div className="chat-content">
      {activeChat ? (
        <>
          <div className="chat-header">Chat {activeChat} Header</div>
          <div className="chat-messages">Chat {activeChat} Messages</div>

          {/* Input area */}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your message..." />
            <button type="submit">Send</button>
          </form>
        </>
      ) : (
        <div className="empty-chat">Select a chat to start</div>
      )}
    </div>
  );
};

export default ChatContent;
