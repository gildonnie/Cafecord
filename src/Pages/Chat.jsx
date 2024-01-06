import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
function Chat() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);
  return (
    <div>
      <h1>This is the start of the chat area.</h1>
      
      <Button
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
          <Offcanvas.Title>Backdrop with scrolling</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </Offcanvas.Body>
      </Offcanvas>

      <Button
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
      
      <Link to='/Login'><Button variant="info">Login</Button>{' '}</Link>

    </div>
  );
}

export default Chat;