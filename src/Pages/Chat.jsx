import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/Chat.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
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
        <h1>This is the start of the chat area.</h1>
        <Button
          id='ChatBtn'
          className="btn btn-danger"
          type="Button"
          onClick={handleModalToggle}
        >
          Delete Message
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
        <textarea type='text' placeholder='Enter Message'></textarea>
      </div>
    </div>
  );
}

export default Chat;