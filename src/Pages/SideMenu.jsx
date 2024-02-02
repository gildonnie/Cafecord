/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext, channelRef } from 'react';
import { db, auth } from '../firebase.js';
import { signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import Chat from './Chat.jsx'
import AvatarContext from './AvatarContext';
import "../Styles/sidemenu.css"
import { set } from 'lodash';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const SideMenu = () => {

  // const [displayName, setDisplayName] = useState(""); // Define state for displayName
  // const [avatar, setAvatar] = useState(""); // Define state for avatar


  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: avatar
    }).then(() => {
      navigate('/chat')
    }).catch((error) => {
      console.log(error)
    });

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('not logged in')
      }
    });
  }, [])

  const { selectedAvatar } = useContext(AvatarContext);
  const { setSelectedAvatar } = useContext(AvatarContext);

  const selectAvatar = (avatar) => {
    if (window.confirm("Do you want to set this as your new avatar?")) {
      setSelectedAvatar(avatar);
      localStorage.setItem('selectedAvatar', avatar); // Save to local storage
    }

  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAvatar('');
    setUsername('');
  }
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

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



  const [channel, setChannel] = useState("")
  const [channelObj, setChannelObj] = useState();
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    userName: ""
  })
  const navigate = useNavigate();
  const channelRef = collection(db, "channels");


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

  // const handleChannel = (value) => {
  //   setChannel(value)
  //   console.log(channel)
  // }

  const [activeChannelId, setActiveChannelId] = useState(null);

  const handleChannel = (channelId) => {
    setChannel(channelId);
    setActiveChannelId(channelId);
    console.log(channelId);
  };
  //highlights the active channel your


  //uses singout function from firebase to signout user 
  const logout = async () => {
    await signOut(auth)
    navigate('/')

  }

  //grabbing current user data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user)
  //       setUserInfo({
  //         avatar: user.photoURL,
  //         userName: user.displayName
  //       })
  //     } else {
  //       console.error('error')
  //     }
  //   })
  //   }
  //   fetchData()
    
  // }, [])


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
          {channelObj ? channelObj.map((channel) => <li onClick={() => handleChannel(channel.id)} key={channel.id}  className={channel.id === activeChannelId ? "active-channel" : ""}>{channel.title}</li>) : <li>No Channels</li>}
          <li><Link to="/add">+ Start New Channel</Link></li>
          <li><Link to="/group-form">Create Group</Link></li>
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
  {/* <p className="avatar-form--hide">Select Avatar</p> */}
  {/* {['radio'].map((type) => (
    
    <div key={`inline-${type}`} className="mb-3 formBody">
    {
      avatarList.map((avatar, idx) => (
        <Form.Check
          id={`inline-radio-${idx+1}`}
          type='radio'
          inline
          value={avatar.url}
          label={<img src={avatar.url} alt={avatar.alt} className="avatar-option"/>}
          onClick={setAvatar(avatar.url)}
        />
      ))
    }
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
  ))} */}
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
      <Chat channel={channel} className='smChat' />
    </div>
  );
};

export default SideMenu;