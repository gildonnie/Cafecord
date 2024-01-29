/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import {  signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import Chat from './Chat.jsx'
// import AvatarContext from './AvatarContext';
import "../Styles/sidemenu.css"
import { set } from 'lodash';

const SideMenu = () => {

// const { selectedAvatar } = useContext(AvatarContext);

  const [channel, setChannel] = useState("")
  const [channelObj, setChannelObj] = useState();
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    userName: ""
  })
  const navigate = useNavigate();
  const channelRef = collection(db, "channels");


//Using on snapshot every time channelRef gets updated(New Channel gets created) the the channelObj which contains all the channels
  useEffect(() => {
    console.log("triggered")
    const queryMessages = query(channelRef,  orderBy("time", "asc"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let channels = []
      snapshot.forEach((channel) => {
        channels.push({ ...channel.data(), id: channel.id })
      })
      if (!isEqual(channels, channelObj)) {

        setChannelObj(channels)
      }
      
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    return () => unsubscribe();
  }, [channelObj])

  const handleChannel = (value) => {
    setChannel(value)
    console.log(channel)
  }

    //uses singout function from firebase to signout user 
    const logout = async () => {
      await signOut(auth)
      navigate('/')
      
     }

     //grabbing current user data
     useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          setUserInfo({
            avatar: user.photoURL,
            userName: user.displayName
          })
        } else {
          console.error(error)
        }
      })
     }, [])

  
  return (
    <>
    <div className="side-menu">
      <div className="avatar-container">
        <div className="avatar">
        <img src={userInfo.avatar} alt="User Avatar" /> {/* Update avatar as needed */}
        </div>
        <p className='username'>{userInfo.userName}</p>
      </div>
     
      <ul className="channel-list">
        <li className="channel-heading">Channel</li>
        {channelObj ? channelObj.map((channel) => <li onClick={() => handleChannel(channel.id)} key={channel.id}>{channel.title}</li>) : <li>No Channels</li>}
        {/* <li><Link to="/channel/channel1">Channel 1</Link></li>
        <li><Link to="/channel/channel2">Channel 2</Link></li>
        <li><Link to="/channel/channel3">Channel 3</Link></li>
        <li><Link to="/channel4">Channel 4</Link></li> 
        <li><Link to="/channel5">Channel 5</Link></li>*/}
        <li><Link to="/add">+ Start New Channel</Link></li>
        <li><Link to="/EditProfile">Edit Profile</Link></li>
        <li onClick={logout}>Log Out</li>
        <li><Link to="/CalChat">CalChat</Link></li>
      </ul>
    </div>
    <Chat channel={channel}/>
    </>
  );
};

export default SideMenu;