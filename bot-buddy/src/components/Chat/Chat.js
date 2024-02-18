import React, { useState } from 'react';
import ChatContent from './ChatContent';
import Sidebar from './Sidebar';

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="chat-container">
      <Sidebar onChatSelect={(id) => setActiveChat(id)} />
      <ChatContent activeChat={activeChat} />
    </div>
  );
};

export default Chat;
