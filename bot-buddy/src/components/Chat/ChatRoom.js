import React from 'react';
import { useEffect, useState } from 'react';
import './ChatRoom.scss';

const ChatRoom = ({ socket, username, room }) => {

    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes() }
            await socket.emit('send_message', messageData);

            setMessageList((list) => [...list, messageData]);
            }
    }
    
    useEffect(() => {
        socket.on("receive_message", (data) => {
            if (data.author !== username) {
                setMessageList((list) => [...list, data]);
                
            }
        });
    }, [socket, username]);

    return (
    <div className="chat-room">
        <div className="chat-header">
            <p>Chat Room</p>
        </div>
            
        <div className="chat-body">
            {messageList.map((data, index) => (
                <div className="message" key={index}>
                    <div className="message-container">
                        <div className="message-content">
                            <p>{data.message}</p>
                        </div> 
                        <div className="message-meta">
                            <p>{data.author}</p>
                            <p>{data.time}</p>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
        <div className="chat-foot">
            <input className="message-input" type="text" placeholder="Type a message" onChange={(e) => {setCurrentMessage(e.target.value)}}/>
            <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
    </div>
    )
}

export default ChatRoom;
