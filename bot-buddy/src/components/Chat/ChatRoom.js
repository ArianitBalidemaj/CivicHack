import React from 'react';
import { useEffect, useState } from 'react';

const ChatRoom = ({ socket, username, room }) => {

    const [currentMessage, setCurrentMessage] = useState('');
    
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes() }
            await socket.emit('send_message', messageData);
            }
    }
    
    useEffect(() => {
        socket.on("receive_message", (data) => {
          console.log(data);
        });
      }, [socket]);

    return (
    <div>
        <div className="chat-header">
            <p>Live Chat</p>
        </div>
            
        <div className="chat-body"></div>
        <div className="chat-foot">
            <input type="text" placeholder="Type a message" onChange={(e) => {setCurrentMessage(e.target.value)}}/>
            <button onClick={sendMessage}>Send &#9658</button>
        </div>
    </div>
    )
}

export default ChatRoom;