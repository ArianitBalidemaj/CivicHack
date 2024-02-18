import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Settings from './components/Settings';
import Home from './components/Home';
import Chat from './components/Chat';
import './components/Home/index.scss';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" index element={<Home />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
