import './index.scss'
import Sidebar from './Sidebar/Sidebar';
import ChatComponent from './FrontServer';

const Chat = () => {

    
    return (
        <div className='chat'>
            <h1>Chat</h1>
            
            <ChatComponent />
            <Sidebar />
        </div>
    )
}

export default Chat;
