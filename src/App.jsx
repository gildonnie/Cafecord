// import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Chat from './Pages/Chat-area';


function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location} >
      <Route index element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App
