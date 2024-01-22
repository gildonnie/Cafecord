// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import EditProfile from './Pages/EditProfile';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile'
import Main from './Pages/Main.jsx'


function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location} >
      <Route index element={<Login />} />
      <Route path='/Login' element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path='/EditProfile' element={<EditProfile />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/main" element={<Main />} />
    </Routes> 
  )
}

export default App
