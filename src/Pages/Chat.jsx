import { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase.js';
import { collection, serverTimestamp, addDoc, onSnapshot, query, where, orderBy, doc, deleteDoc } from 'firebase/firestore';
import isEqual from 'lodash/isEqual';
import Button from 'react-bootstrap/Button';
import "../Styles/Chat.css";


function Chat(props) {
  const [messages, setMessages] = useState("")
  const [messageCollection, setMessageCollection] = useState([]) 
  const messagesEndRef = useRef(null);
  const msgRef = collection(db, "messages");

  const { channel } = props;




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

        <div className='messages sent'>
          <div className="message-info">
            <Button className="btn btn-danger mobile-deleteBtn" type="Button" onClick={(e) => deleteMessage(e.target)}>
              x
            </Button>
            <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes209</p>
                <p className='timestamp'>Sent 12:03:09 PM</p>
                <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteMessage(e.target)}>
                  X
                </Button>
              </div>
              <p>Hey Antonia! How is the new French press?</p>
            </div>
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <Button className="btn btn-danger mobile-deleteBtn" type="Button" onClick={(e) => deleteMessage(e.target)}>
              x
            </Button>
            <img src='/Avatars/cafeart.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>AntoniaLatte</p>
                <p className='timestamp'>Sent 12:09:43 PM</p>
                <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteMessage(e.target)}>
                  X
                </Button>
              </div>
              <p>Its working well! Im making a second cup lol!</p>
            </div>
          </div>
        </div>


        <div className='messages received'>
          <div className="message-info">
            <Button

              className="btn btn-danger mobile-deleteBtn"
              type="Button"
              onClick={(e) => deleteMessage(e.target)}

            >
              x
            </Button>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>AustinBrew</p>
                <p className='timestamp'>Sent 12:15:04 PM</p>
                <Button

                  className="btn btn-danger deleteBtn"
                  type="Button"
                  onClick={(e) => deleteMessage(e.target)}

                >
                  X
                </Button>
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
          </div>
        </div>

        {/* Dynamic rendering of messages starts here */}
        {messageCollection.map((message) => {
          // console.log(message.id)

          if (!message || !message.time) {
            return null;
          }
          const messageSent = message.time.seconds * 1000 + message.time.nanoseconds / 1e6;
          const date = new Date(messageSent);
          const dateSent = date.toLocaleString();
          return (
            <div className='messages sent' key={message.id}>
              <div className="message-info">
                <img src={message.profileImg} alt="User Avatar" /> {/* Update avatar as needed */}
                <div className='message-structure'>
                  <div className="message-details">
                    <p>{message.user}</p> {/* Replace with actual sender name */}
                    <p className='timestamp'>Sent {dateSent}</p>
                    {/* Delete button and other message details */}
                    <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteMessage(message.id)}>X</Button>
                  </div>
                  <p>{message.text}</p>
                  {/* {console.log('Message:', message)} */}
                </div>
              </div>
              {/* <div ref={messagesEndRef} /> Empty div for scrolling */}
            </div>
          )
        })}
        {/* Dynamic rendering of messages ends here */}

        <textarea
          className='text-input'
          type='text' placeholder='Enter Message'
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          value={messages}
        ></textarea>
        <button className='sendBtn' onClick={addMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;