import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Chat.css"
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

function Chat() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);




  function deleteMessage(button) {
    // Get the parent message element
    var message = button.closest('.messages');
    // Confirm deletion (you can customize this part)
    if (confirm("Are you sure you want to delete this message?")) {
      // Remove the message element
      message.remove();
    }
  }

  const [messages, setMessages] = useState([]);

  function addMessage() {
    // Get the message text from the input field
    const messageText = document.querySelector('.text-input').value.trim();

    // Only proceed if the message is not empty
    if (messageText) {
      // Create a new message object
      const newMessage = {
        id: Date.now(), // simple unique identifier
        text: messageText,
        sender: 'currentUser', // You might want to dynamically set this
        timestamp: new Date().toLocaleTimeString(),
      };

      // Add the new message to the messages state
      setMessages([...messages, newMessage]);

      // Clear the input field
      document.querySelector('.text-input').value = '';
    }
  }


  return (
    <div className='background'>
      <div className='SideMenu'>
        <Button
          className="btn btn-primary side-btn"
          type="Button"
          onClick={handleOffcanvasToggle}
        >
          <p> Edit Profile Button</p>
        </Button>

        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
          scroll={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Edit Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Choose new avatar.</p>
          </Offcanvas.Body>
        </Offcanvas>
        <Link to='/Login'><Button className="side-btn" variant="info"><p>Logout</p></Button>{' '}</Link>
      </div>
      <div className='ChatMainBody'>
        <div className='chat-title'>
          <img className='logo' src="/assets/cafeLogo2.jpg" />
          <h1>Cafecord</h1>
        </div>

        <div className='messages sent'>
          <div className="message-info">
            <Button

              className="btn btn-danger mobile-deleteBtn"
              type="Button"
              onClick={(e) => deleteMessage(e.target)}

            >
              x
            </Button>
            <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes209</p>
                <p>Sent-12:03pm</p>
                <Button

                  className="btn btn-danger deleteBtn"
                  type="Button"
                  onClick={(e) => deleteMessage(e.target)}

                >
                  X
                </Button>
              </div>
              <p>Hey Antonia! How is the new French press?</p>
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
            <img src='/Avatars/cafeart.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>AntoniaLatte</p>
                <p>Sent-12:09pm</p>
                <Button

                  className="btn btn-danger deleteBtn"
                  type="Button"
                  onClick={(e) => deleteMessage(e.target)}

                >
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
                <p>Sent-12:15pm</p>
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
        {messages.map((message) => (
          <div className='messages sent' key={message.id}>
            <div className="message-info">

              <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" /> {/* Update avatar as needed */}
              <div className='message-structure'>
                <div className="message-details">
                  <p>{message.sender}</p> {/* Replace with actual sender name */}
                  <p>Sent- {message.timestamp}</p>
                  {/* Delete button and other message details */}
                  <Button className="btn btn-danger deleteBtn" type="Button" onClick={(e) => deleteMessage(e.target)}>X</Button>
                </div>
                <p>{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Dynamic rendering of messages ends here */}


        <textarea className='text-input' type='text' placeholder='Enter Message'></textarea>
        <button className='sendBtn' onClick={(e) => addMessage(e.target)}>Send</button>


      </div>
    </div>
  );
}

export default Chat;