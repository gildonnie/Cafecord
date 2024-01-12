import React from 'react'
import styles from './SignUp.module.css'
import { useState } from 'react'

export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  function handleEmail(value) {
    setEmail(value)
  }

  function handlePassword(value) {
    setPassword(value)
  }

  function handleShowPassword(value) {
    setShowPassword(value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  function handleSignup(){
    //authentication and stuffs
  }

  return (
    <div className='container-fluid h-screen'>
      <div className="row h-100">
        <div className={`${styles['img']} h-100 col-12 col-md-6`}></div>
        <div className={` ${styles['right-container']} col-md-6`}>
          <div className={`${styles['right-inner-container']}`}>
            <h1 className="mb-5">Let's get started,</h1>
            <label htmlFor="loginEmail"></label>
            <input className={`${styles['email-input']}`} onChange={e => {handleEmail(e.target.value)}} type="text" name="loginEmail" placeholder="email"></input>
            <label htmlFor="loginPassword"></label>
            <div className='mb-3 position-relative'>
              <input className={`${styles['password-input']} position-relative`} onChange={e => {handlePassword(e.target.value)}} type={showPassword ? 'text' : 'password'} name="signupPassword" placeholder="password">
              </input>
              <span className={`${styles['password-visibility']}`} onClick={togglePasswordVisibility}>
                {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash"></i>}
              </span>
            </div>
            <div className='mb-5 position-relative'>
              <input className={`${styles['password-input']} position-relative`} onChange={e => {handleShowPassword(e.target.value)}} type={showConfirmPassword ? 'text' : 'password'} name="signupConfirmPassword" placeholder="confirm password">
              </input>
              <span className={`${styles['password-visibility']}`} onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash"></i>}
              </span>
            </div>
            <button className={`${styles['login-btn']} w-100`} onClick={handleSignup()}>Create Account</button>
            <p className={`${styles.divider}`} >or continue with</p>
            <button className={`${styles['google-btn']}`}>Google</button>
            <button className={`${styles['apple-btn']}`}>Apple</button>
            <p className={`${styles['no-account-text']} text-center`}>
              Already have an account? <a href='/' className={`${styles['signup-anchor']}`}> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
