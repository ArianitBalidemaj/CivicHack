
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import Chat from './components/Chat';
import Settings from './components/Settings';
import SignUp from './components/SignUp';
import './components/Home/index.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" index element={<Home />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Chat" element={<Chat />} />
      </Route>
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;
