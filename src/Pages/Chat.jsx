import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Chat.css"
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import Toast from 'react-bootstrap/Toast';

function Chat() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  // const [showModal, setShowModal] = useState(false);
  // const handleModalToggle = () => setShowModal(!showModal);


  function deleteMessage(button) {
    // Get the parent message element
    var message = button.closest('.messages');

    // Confirm deletion (you can customize this part)
    if (confirm("Are you sure you want to delete this message?")) {
      // Remove the message element
      message.remove();
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
                // onClick={handleModalToggle}
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
                  // onClick={handleModalToggle}
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
                // onClick={handleModalToggle}
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
                  // onClick={handleModalToggle}
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
                // onClick={handleModalToggle}
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
                  // onClick={handleModalToggle}
                >
                  X
                </Button>
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
          </div>
        </div>

        <textarea className='text-input' type='text' placeholder='Enter Message'></textarea>
      </div>
    </div>
  );
}

export default Chat;