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
        <Link to='/Login'><Button id='ChatBtn' variant="info"><p>Logout</p></Button>{' '}</Link>
      </div>
      <div className='ChatMainBody'>
        <div className='chat-title'>
          <img className='logo' src="./public/assets/cafeLogo2.jpg" />
          <h1>Cafecord</h1>
        </div>

        <div className='messages sent'>
          <div className="message-info">
            <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes209</p>
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

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:09pm</p>
                <p>AntoniaLatte</p> 
              </div>
              <p>Its working well! Im making a second cup lol!</p>
            </div>
            <img src='/Avatars/cafeart.jpg' alt="User Avatar" />
          </div>
        </div>


        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>


        <div className='messages sent'>
          <div className="message-info">
            <img src='/Avatars/Beeo-o.jpg' alt="User Avatar" />
            <div className='message-structure'>
              <div className="message-details">
                <p>Cafevibes209</p>
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

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <div className='messages received'>
          <div className="message-info">
            <div className='message-structure'>
              <div className="message-details">
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
                <p>Sent-12:15pm</p>
                <p>AustinBrew</p> 
              </div>
              <p>Hey I want one!! That sounds so good! yum I need a cup or 3 right now! This project and frying my brain! This is driving me insane in the membrane!! Ahhhh I wanna go home but im already there...</p>
            </div>
            <img src='/Avatars/computerDog.jpg' alt="User Avatar" />
          </div>
        </div>

        <textarea className='text-input' type='text' placeholder='Enter Message'></textarea>
      </div>
    </div>
  );
}

export default Chat;