/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { auth, provider } from '../firebase.js';
import { signInWithPopup,  signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Signup from '../Pages/Signup.jsx'


function Login() {

  const [currentUser, setCurrentUser] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate();

    //sign in with email
    const singInWIthEmail = async (e) => {
      e.preventDefault();
      try {
        const token = await signInWithEmailAndPassword(auth, email, password)
        const user = token.user
        console.log(user)
        navigate('/chat')
      } catch (error) {
        console.error(error)
      }
    }

    //sign in with google
    const signInWithGoogle = async () => {
      try {
        const token = await signInWithPopup(auth, provider);
        const user = token.user
        setCurrentUser(user.displayName);
        console.log(token)
        navigate('/profile')
      } catch (error) {
        console.error(error.message)
      }
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user.displayName)
        }
      })
    }, [])

   const logout = async () => {
    signOut(auth)
    setCurrentUser(null)
   }
   

  

 

  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });


  return (
    <>
      <div>login</div>
      <button onClick={signInWithGoogle}>Google</button>
      <div>welcome {currentUser}</div>
      <button onClick={logout}>logout</button>

      <div>
        <form>
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='pas' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={singInWIthEmail} type='submit'>submit</button>
        </form>
      </div>
      <Signup />
    </>
  )
}

export default Login;