/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import Button from '../Components/Button';

function Chat(props) {
  const [messages, setMessages] = useState("")
  const [messageCount, setMessageCount] = useState([]) 
  const msgRef = collection(db, "messages");

  const { channel } = props;

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
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessageCount(messages)
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    return () => unsubscribe();
  }, [msgRef, channel])



  return (
    <>
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
      {messageCount.map((message) => <h1 key={message.id}>{message.text}</h1>)}
    </>
  )
}

export default Chat;