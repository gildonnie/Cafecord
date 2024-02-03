
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Chat from './Pages/SideMenu';
import EditProfile from './Pages/EditProfile';
import SignUp from './Pages/SignUp';
import CreateGroup from './Pages/Create-group';
import Add from './Pages/TempAddChan'
import AvatarContext from './Pages/AvatarContext';
import Products from './Pages/Products';

function App() {
  const location = useLocation();
  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    // Get avatar from local storage or fallback to default
    return localStorage.getItem('selectedAvatar') || '/Avatars/Beeo-o.jpg';
  });


  return (
    <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
      <Routes key={location.pathname} location={location} >
        <Route index element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path='/EditProfile' element={<EditProfile />}/>
        <Route path="/group-form" element={<CreateGroup/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/Products" element={<Products/>}/>
    </Routes> 
    </AvatarContext.Provider >                                                                                 
  )
}

export default App
