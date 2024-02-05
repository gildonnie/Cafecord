/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import { signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Chat from './Chat.jsx';
import "../Styles/sidemenu.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const SideMenu = () => {

  const[description, setDescription] = useState('');
  const [channel, setChannel] = useState("")
  const [channelObj, setChannelObj] = useState();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [activeChannelId, setActiveChannelId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    userName: ""
  })

  const navigate = useNavigate();
  const channelRef = collection(db, "channels");


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('not logged in')
      }
    });
  }, [])


  const handleClose = () => {
    setShow(false);
    setAvatar('');
    setUsername('');
  }
  const handleShow = () => setShow(true);

  const avatarList = [
    {url: '/Avatars/Beeo-o.jpg', alt:'social-media-cafe'},
    {url: '/Avatars/cafeart.jpg', alt: 'two-cafe-friends'},
    {url: '/Avatars/cafeart2.jpg', alt: 'lady-holding-coffee'},
    {url: '/Avatars/computerDog.jpg', alt: 'coding-dog'},
    {url: '/Avatars/coffeeMaker2.jpg', alt: 'pink-cafe-girl'},
    {url: '/Avatars/coffeeBrewers2.jpg', alt: 'boy-walking-with-coffee'}
  ]
  
  const handleProfile = async () => {
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: avatar
    })
    

    setUserInfo({
      ...userInfo,
      userName: username,
      avatar: avatar
    });
    console.log('Name', auth.currentUser.displayName)
    console.log('avatar: ', auth.currentUser.photoURL)
    setShow(false)
    setAvatar('');
    setUsername('');
  }

  //Using on snapshot every time channelRef gets updated(New Channel gets created) the the channelObj which contains all the channels
  useEffect(() => {
    console.log("triggered")
    const queryMessages = query(channelRef, orderBy("time", "asc"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let channels = []
      snapshot.forEach((channel) => {
        channels.push({ ...channel.data(), id: channel.id })
      })
      if (!isEqual(channels, channelObj)) {

        setChannelObj(channels)
      }

    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUserInfo({
          avatar: user.photoURL,
          userName: user.displayName
        })
      } else {
        console.error('error')
      }
    })
    return () => unsubscribe();
  }, [channelObj])

  const handleChannel = (channelInfo) => {
    console.log(channelInfo);
    setChannel(channelInfo.id);
    setActiveChannelId(channelInfo.id);
    setDescription(channelInfo.description)
    
  };
  //highlights the active channel your currently in

  const deleteChannel = async (id)  => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        const docPointer = doc(db, "channels", id)
        await deleteDoc(docPointer)
        window.location.reload();
      } catch (error) {
        console.error(error)
      }
      
      }

  }

  //uses singout function from firebase to signout user 
  const logout = async () => {
    await signOut(auth)
    navigate('/')

  }

  return (
    <div className='smBackground'>
      <div className="side-menu">
        <div className="avatar-container">
          <div className="avatar">
            <img src={userInfo.avatar} alt="User Avatar" />
            {/* uses selected Avatar from EditProfile or userInfo*/}
          </div>
          <p className='username'>{userInfo.userName}</p>
        </div>

        <ul className="channel-list">
          <li className="channel-heading">Channel</li>
          {channelObj ? 
            channelObj.map((channel) => 
            <li
              onClick={() => handleChannel(channel)} 
              key={channel.id}  
              className={channel.id === activeChannelId ? "active-channel" : ""}
              id="channels"
            >
              {channel.title}
              <FontAwesomeIcon className="trashIcon" icon={faTrashAlt} onClick={() => deleteChannel(channel.id)} />
            </li>
            ) : <li>No Channels</li>
          }
          <hr />
          <li className="createGroup"><Link to="/group-form">Create Group</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li>
            <button className='editBtn' onClick={handleShow}>
              Edit Profile
            </button>

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
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  {/* Avatar selection form using radio buttons with avatar images*/}
                  <p className='selectionTitle'>Select Avatar</p>
                  <div className= "avatar-form">
                    <div key='default-radio' className="mb-3 formBody">
                      {
                        avatarList.map((avatar, idx) => (
                          <Form.Check
                          key={avatar.url}
                          id={`inline-radio-${idx+1}`}
                          type='radio'
                          name="group1"
                          inline
                          value={avatar.url}
                          label={<img src={avatar.url} alt={avatar.alt} className="avatar-option"/>}
                          onClick={() => setAvatar(avatar.url)}
                          />
                        ))
                      }
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer className='modalFooter'>
                <Button variant="avatar-close" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="avatar-save" onClick={handleProfile}>
                Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </li>
          <li onClick={logout}>Log Out</li>
        </ul>
      </div>
      <Chat channel={channel} description={description} className='smChat' />
    </div>
  );
};

export default SideMenu;