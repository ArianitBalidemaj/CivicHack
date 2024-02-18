import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Settings from './components/Settings';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" index element={<Home />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Chat" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
