import styles from '../Styles/Login.module.css'
import { useState, useEffect } from 'react'

import { auth, provider } from '../firebase.js';
import { signInWithPopup,  signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  function handleEmail(value) {
    setEmail(value)
  }

  function handlePassword(value) {
    setPassword(value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container-fluid h-screen'>
      <div className="row h-100">
        <div className={`${styles['img']} h-100 col-12 col-md-6`}></div>
        <div className={` ${styles['right-container']} col-md-6`}>
          <div className={`${styles['right-inner-container']}`}>
            <h1 className="mb-5">Welcome back 👋,</h1>
            <label htmlFor="loginEmail"></label>
            <input id='loginEmail' className={`${styles['email-input']}`} onChange={e => { handleEmail(e.target.value) }} type="text" name="loginEmail" placeholder="email"></input>
            <div className='mb-5 position-relative'>
              <label htmlFor="loginPassword"></label>
              <input id='loginPassword' className={`${styles['password-input']} position-relative`} onChange={e => { handlePassword(e.target.value) }} type={showPassword ? 'text' : 'password'} name="loginPassword" placeholder="password">
              </input>
              <span className={`${styles['password-visibility']}`} onClick={togglePasswordVisibility}>
                {showPassword ? <i className="bi bi-eye-fill cursor-pointer"></i> : <i className="bi bi-eye-slash cursor-pointer"></i>}
              </span>
            </div>
            <button className={`${styles['login-btn']} w-100`} onClick={singInWIthEmail}>Login</button>
            <p className={`${styles.divider}`} >or login with</p>
            <button type='button' className={`${styles['google-btn']} d-flex justify-content-center gap-2 align-items-center`} onClick={signInWithGoogle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" role="img">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
              </svg>
              Google
              </button>
            <p className={`${styles['no-account-text']} text-center`}>
              Don't have an account? <a href='/signup' className={`${styles['signup-anchor']}`}> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}