// import { auth } from '../firebase.js';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, updateProfile  } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const[displayName, setDisplayName] = useState("");
  const navigate = useNavigate();


  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('not logged in')
      }
    });
  }, [])

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      navigate('/chat')
    }).catch((error) => {
      console.log(error)
    });
  
  }

 

  return (
    <div>
       <input type="text" placeholder='username' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
        <button onClick={handleUpdate} type='submit'>submit</button>
    </div>
  )
}

export default Profile;