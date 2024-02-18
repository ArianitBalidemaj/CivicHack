// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './index.scss'
import ChatRoom from './ChatRoom';


const socket = io.connect('http://localhost:3005/Chat');

// Component where you establish the socket connection
const ChatComponent = () => {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            socket.emit('join_room', room);
            setShowChat(true);
        }
    }


  return (
    <div className="submit-container">
    {!showChat ? (
    <div>
        <h1>Join A Chat</h1>
        <br />
        <input className="submit" type="text" placeholder="Random Name" onChange={(e) => {setUsername(e.target.value)}}/>
        <input className="submit" type="text" placeholder="Room ID" onChange={(e) => {setRoom(e.target.value)}}/>
        <button className="submit" onClick={joinRoom}>Join</button>
    </div>
    ) : (
    <ChatRoom socket={socket} username={username} room={room}/>
    )}

    </div>
  );
};

export default ChatComponent;
