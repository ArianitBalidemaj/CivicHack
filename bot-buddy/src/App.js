import './App.scss';
import { Routes , Route } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Layout />}>  // This is to be changed
      </Route>
    </Routes>
    </>
  );
}

export default App;
