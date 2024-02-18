import React, { useState } from 'react';
import ChatBox from '../ChatBox';
import './Sidebar.scss';

const Sidebar = ({ onChatSelect }) => {
  const [chatBoxes, setChatBoxes] = useState([]);

  const handleNewChat = () => {
    const newChatBox = { id: Date.now(), content: '' };
    setChatBoxes((prevChatBoxes) => [...prevChatBoxes, newChatBox]);
  };

  const handleChatClose = (id) => {
    setChatBoxes((prevChatBoxes) => prevChatBoxes.filter((chatBox) => chatBox.id !== id));
  };

  const handleChatClick = (id) => {
    if (onChatSelect) {
      onChatSelect(id);
    };
  };

  const calculateChatBoxesHeight = () => {
    const totalChatBoxes = chatBoxes.length;
    return `${totalChatBoxes * 50}px`;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top-heading">Bot Buddy</div>

      <div className="chat-boxes" style={{ height: calculateChatBoxesHeight() }}>
        {chatBoxes.map((chatBox) => (
          <ChatBox
            key={chatBox.id}
            id={chatBox.id}
            onClose={() => handleChatClose(chatBox.id)}
            onChatSelect={() => handleChatClick(chatBox.id)} 
          />
        ))}
      </div>

      <div className="new-chat-button" onClick={handleNewChat}>
        New Chat
      </div>
    </div>
  );
};

export default Sidebar;
