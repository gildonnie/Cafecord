/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

function Chat() {
  const [messages, setMessages] = useState("")
  const [channel, setChannel] = useState("")
  const [messageCount, setMessageCount] = useState([])
  const msgRef = collection(db, "messages")
  const navigate = useNavigate();
  

  const  deleteMsg = (event, msgId) => {
    event.stopPropagation()
    setMessages(oldMsg => oldMsg.filter(msg => msg.id !== msgId))
  }

  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('not logged in')
      }
    });
  }, [])

  //setting channel value on click 
    const handleChannel = (value) => {
      setChannel(value)
      console.log(channel)
    }

  //submitting a document as an object to the firestore collection msgRef if message is blank it wont submit 
  const messageSubmit = async (e) => {
    e.preventDefault();
    if (messages === "") return;
    
    try {
      await addDoc(msgRef, {
        text: messages,
        time: serverTimestamp(),
        user: auth.currentUser.displayName,
        profileImg: auth.currentUser.photoURL,
        channel
      })
      setMessages("");
    } catch (error) {
      console.error(error);
    }
  }




//Grabbing real time messages using onsnapshot depending on the channel making a query for it
  useEffect(() => {
    const queryMessages = query(msgRef, where("channel", "==", channel), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        const timestamp = doc.data().timestamp;
        // console.log("Timestamp:", timestamp);
        messages.push({ ...doc.data(), id: doc.id })
      })
      // console.log("Messages:", messages);
      setMessageCount(messages)
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    return () => unsubscribe();
  }, [channel, msgRef])

  const logout = async () => {
    await signOut(auth)
    navigate('/')
    
   }

  return (
    <>
      <button onClick={logout}>logout</button>
      <div>
        <form>
          <input type="text"
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          />
          <button onClick={messageSubmit} type="submit">enter</button>
        </form>
      </div>
      <Button 
        deleteMsg={deleteMsg}
      />
      <button onClick={() => handleChannel("1")}>channel 1</button>
      <button onClick={() => handleChannel("2")}>channel 2</button>
      {messageCount.map((message) => <h1 key={message.id}>{message.text}</h1>)}
    </>
  )
}

export default Chat;