import { useState, useEffect, useRef, useContext } from 'react';
import { db, auth } from '../firebase.js';
import { collection, serverTimestamp, addDoc, onSnapshot, query, where, orderBy, doc, deleteDoc } from 'firebase/firestore';
import isEqual from 'lodash/isEqual';
import Button from 'react-bootstrap/Button';
import "../Styles/Chat.css";
import AvatarContext from './AvatarContext';//Changes the avatar img

function Chat(props) {
  const [messages, setMessages] = useState("")
  const [messageCollection, setMessageCollection] = useState([]) 
  const messagesEndRef = useRef(null);
  const msgRef = collection(db, "messages");

  const { channel, description } = props;


  const { selectedAvatar } = useContext(AvatarContext);//Changes the avatar img

  //The object is composed of values one of them being channel which is the id of the channel, which is used to grab only those messages with that channel id
  const addMessage = async (e) => {
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



//Grabbing real time messages using onsnapshot depending on the channel by making a query for it using where, where it compares the the channel value of the message to the channel that is click which is the id of the channel
  useEffect(() => {
    console.log("Effect is running");
    const queryMessages = query(msgRef, where("channel", "==", channel), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      if (!isEqual(messages, messageCollection)) {
        console.log('Updating state with new messages');
        setMessageCollection(messages)
      }
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    return () => unsubscribe();
  }, [channel, messageCollection])

  async function deleteMessage(id) {
    if (confirm("Are you sure you want to delete this message?")) {
    try {
      const docPointer = doc(db, "messages", id)
      await deleteDoc(docPointer)
    } catch (error) {
      console.error(error)
    }
    
    }
  }

  const handleChange = (e) => {
    setMessages(e.target.value)
  }

  function handleKeyPress(e) {
    // Check if the Enter key is pressed and not the Shift key
    console.log("handleKeyPress called");
    if (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevents the default action of Enter key (new line)
        addMessage(e); // Calls the function to add a message
      }
    }
  }

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageCollection]);




  return (
    <div className='chatBackground'>
      <div className='ChatMainBody'>
        <div className='chat-title'>
          <img className='chatLogo' src="/assets/cafeLogo2.jpg" />
          <h1>Cafecord</h1>
        </div>
        <div><p className='description'>{description}</p></div>

        {/* Dynamic rendering of messages starts here */}
        {messageCollection.map((message) => {

          if (!message || !message.time) {
            return null;
          }
          const messageSent = message.time.seconds * 1000 + message.time.nanoseconds / 1e6;
          const date = new Date(messageSent);
          const dateSent = date.toLocaleString();
          return (
            <div className='messages sent' key={message.id}>
              <div className="message-info">
                <img src={selectedAvatar || message.profileImg} alt="User Avatar" /> {/* Update avatar as needed */}
                <div className='message-structure'>
                  <div className="message-details">
                    <p>{message.user}</p> {/* Replace with actual sender name */}
                    <p className='timestamp'>Sent {dateSent}</p>
                    {/* Delete button and other message details */}
                    <Button className="deleteBtn" type="Button" onClick={() => deleteMessage(message.id)}>X</Button>
                  </div>
                  <p>{message.text}</p>
                </div>
              </div>
               <div ref={messagesEndRef} /> {/*Empty div for scrolling */}
            </div>
          )
        })}
        {/* Dynamic rendering of messages ends here */}
        {
        channel ?
          <> 
            <textarea
              className='text-input'
              type='text' placeholder='Enter Message'
              onKeyDown={handleKeyPress}
              onChange={handleChange}
              value={messages}
            ></textarea>
            <button className='sendBtn' onClick={addMessage}>Send</button>
          </>
         
         : "Click a channel"
        } 
      </div>
    </div>
  );
}

export default Chat;