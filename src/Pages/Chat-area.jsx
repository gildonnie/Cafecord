import {  signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

function Chat() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logout = async () => {
    await signOut(auth)
    navigate('/')
    
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <p>You are not logged in.</p>
          <p>To continue please <a href='/'>login</a></p>
        </>
      )}
    </div>
  )
}

export default Chat;