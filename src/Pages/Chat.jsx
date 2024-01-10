import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Chat.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import Toast from 'react-bootstrap/Toast';

function Chat() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);
  return (
    <div className='background'>
      <div className='SideMenu'>
        <Button id='ChatBtn'
          className="btn btn-primary"
          type="Button"
          onClick={handleOffcanvasToggle}
        >
          Edit Profile Button
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
        <Link to='/Login'><Button id='ChatBtn' variant="info">Logout</Button>{' '}</Link>
      </div>
      <div className='ChatMainBody'>
        <h1>Cafecord</h1>
        <div className='messages'>
          <div className="message-info">
            <img src='./public/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes</p>
                <p>Sent-12:03pm</p>
                <Button
                  id='ChatBtn'
                  className="btn btn-danger deleteBtn"
                  type="Button"
                  onClick={handleModalToggle}
                >
                  X
                </Button>
                <Modal show={showModal} onHide={handleModalToggle}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Message</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Are you sure you want to delete message?</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalToggle}>
                      Close
                    </Button>
                    <Button variant="primary">Yes</Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <p>Hey Antonia! How is the new French press?</p>
            </div>
          </div>
        </div>
        <textarea type='text' placeholder='Enter Message'></textarea>
      </div>
    </div>
  );
}

export default Chat;