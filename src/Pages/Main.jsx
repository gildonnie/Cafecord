/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import {  signOut } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import Chat from './Chat.jsx'


function Channels() {
  const [channel, setChannel] = useState("")
  const [title, setTitle] = useState("")
  const [channelObj, setChannelObj] = useState();
  const channelRef = collection(db, "channels");
  const navigate = useNavigate();


   //submitting a document as an object to the firestore collection channelRef 
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

  //onclick the channel id gets set to channel state which we pass to the chat area to grab only those messages that are in the room by comparing the ids of the messages to the channel id
  const handleChannel = (value) => {
    setChannel(value)
    console.log(channel)
  }

  //uses singout function from firebase to signout user 
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