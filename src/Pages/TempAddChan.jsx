/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { db } from '../firebase.js';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';


function TempAddChan () {
    
  const [title, setTitle] = useState("")
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
      navigate('/Chat')

    } catch (error) {
      console.error(error);
    }
  }

    return (
        <>
            <h1>testing: add channel name</h1>
            <form>
                <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
                <button onClick={channelSubmit} type="submit">enter</button>
            </form>
        </>
    )
}

export default TempAddChan;