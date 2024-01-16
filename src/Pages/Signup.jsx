/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email)
    if(password === rePassword) {
      try {
        const userCreds = createUserWithEmailAndPassword(auth, email, password)
        const user = userCreds.user;
        console.log(user)
        navigate('/profile')
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('pass dont match')
    }
  }



  return (
    <div>
      <form>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='pas' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder='pass2' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
        <button onClick={handleSignup} type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login;
