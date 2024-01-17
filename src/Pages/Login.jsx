/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { auth, provider } from '../firebase.js';
import { signInWithPopup,  signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';


function Login() {

  const [currentUser, setCurrentUser] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate();

    //sign in with email
    const singInWIthEmail = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/chat')
      } catch (error) {
        console.error(error)
      }
    }

    //sign in with google
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, provider);
        navigate('/chat')
      } catch (error) {
        console.error(error.message)
      }
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.displayName)
        }
      })
    }, [])

   

  return (
    <>
      <div>login</div>
      <button onClick={signInWithGoogle}>Google</button>
      

      <div>
        <form>
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='pas' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={singInWIthEmail} type='submit'>submit</button>
        </form>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
    </>
  )
}

export default Login;