// import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile'
import Signup from './Pages/Signup.jsx'
import Main from './Pages/Main.jsx'


function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location} >
      <Route index element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default App
