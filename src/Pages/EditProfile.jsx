// import { Link } from "react-router-dom";
// import styles from '../Styles/EditProfile.module.css';

//  function EditProfile() {


//     return(
//         <div className={styles.profileBackground}>
//             <div className={styles.epSideMenu}><Link className={styles.profileLinks} to={'/Chat'}>Chat</Link></div>
//             <div className={styles.avatarCard}>
//                 <p>Select New Avatar</p>
//                 <img src="/Avatars/coffeeBrewers.jpg" alt="Coffee Brewer" />
//                 <img src="/Avatars/coffeeBrewers2.jpg" alt="Coffee Brewer" />
//                 <img src="/Avatars/coffeeMaker1.jpg" alt="Coffee Brewer" />
//                 <img src="/Avatars/coffeeMaker2.jpg" alt="Coffee Brewer" />
//                 <img src="/Avatars/coffeeMaker3.jpg" alt="Coffee Brewer" />
//             </div>
            
 
//         </div>
//     )
// }

// export default EditProfile;


import { useState } from 'react';
import {Link} from 'react-router-dom'
import "../Styles/Modal.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import FormCheck from 'react-bootstrap/FormCheck'
//import ToggleButton from 'react-bootstrap/ToggleButton';
//import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function EditProfile() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div className='calChatBody'>
      <div>
        <Link to={'/Chat'}><Button>Chat</Button></Link>
      </div>
      <h3>Chat area</h3>
      {/* <Button><Link to={'/Chat'} >Chat</Link></Button> */}
      {/* Button to open react-bootstrap modal to user's edit profile, button has been customized using variant */}
      
      <Button variant="open-modal" onClick={handleShow}>
        Edit Profile
      </Button>

      {/* Modal area for user to edit profile */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className='formBackground'>
          <Form >

            {/* Edit/Change username form*/}
            <Form.Group className="mb-3" controlId="userForm.ControlInput1">
              <Form.Label className='formLabel'>Change Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="New username..."
                autoFocus
              />
            </Form.Group>

            {/* Avatar selection form using radio buttons with avatar images*/}
            <p className='selectionTitle'>Select Avatar</p>
            <div className= "avatar-form">
              {/* <p className="avatar-form--hide">Select Avatar</p> */}
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3 formBody">
                  <Form.Check
                    inline
                    label= {<img src= '/Avatars/Beeo-o.jpg' alt='social-media-cafe' className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onClick={(e) => {
                      console.log(e.target.checked);
                    }}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart.jpg' alt='two-cafe-friends'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/cafeart2.jpg' alt='lady-holding-coffee'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />

                  <Form.Check
                    inline
                    label={<img src= '/Avatars/computerDog.jpg' alt='coding-dog'className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />

                  <label>
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/coffeeMaker2.jpg' alt='pink-cafe-girl' className="avatar-option"/>}
                    name="group1"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                  </label>
                  
                  
                  <Form.Check
                    inline
                    label={<img src= '/Avatars/coffeeBrewers2.jpg' alt='boy-walking-with-coffee' className="avatar-option" />}
                    name="group1"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                
                </div>
              ))}
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer className='modalFooter'>

          <Button variant="avatar-close" onClick={handleClose}>
            Close
          </Button>

          {/* <Button variant="avatar-save" onClick={handleClose}>
            Save Changes
          </Button> */}

        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EditProfile;