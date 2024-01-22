/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import {  signOut } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Chat from './Chat-area.jsx';


function Channels() {
  const [channel, setChannel] = useState("")
  const [title, setTitle] = useState("")
  const [channelObj, setChannelObj] = useState();
  const channelRef = collection(db, "channels");
  const navigate = useNavigate();


   //submitting a document as an object to the firestore collection msgRef if message is blank it wont submit 
   const channelSubmit = async (e) => {
    e.preventDefault();
    if (title === "") return;
    try {
      await addDoc(channelRef, {
        title: title,
        time: serverTimestamp(),
      })
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  }




//Grabbing real time messages using onsnapshot depending on the channel making a query for it
  useEffect(() => {
    const queryMessages = query(channelRef,  orderBy("time", "asc"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let channels = []
      snapshot.forEach((channel) => {
        channels.push({ ...channel.data(), id: channel.id })
      })
      setChannelObj(channels)
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    return () => unsubscribe();
  }, [channelRef])

  const handleChannel = (value) => {
    setChannel(value)
    console.log(channel)
  }

  
  const logout = async () => {
    await signOut(auth)
    navigate('/')
    
   }


  return (
    <>
       <form>
          <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button onClick={channelSubmit} type="submit">enter</button>
        </form>
        {channelObj ? channelObj.map((channel) => <div onClick={() => handleChannel(channel.id)} key={channel.id}>{channel.title}</div>) : <h1>No Channels</h1>}
        <Chat channel={channel} />
        <button onClick={logout}>logout</button>
    </>
  )
}

export default Channels;