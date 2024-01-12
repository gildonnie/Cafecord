import styles from './Login.module.css'
import { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  
  function handleEmail(value) {
    setEmail(value)
  }

  function handlePassword(value) {
    setPassword(value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleLogin(email, password){
    //authentication and stuffs
  }

  return (
    <div className='container-fluid h-screen'>
      <div className="row h-100">
        <div className={`${styles['img']} h-100 col-12 col-md-6`}></div>
        <div className={` ${styles['right-container']} col-md-6`}>
          <div className={`${styles['right-inner-container']}`}>
            <h1 className="mb-5">Welcome back,</h1>
            <label htmlFor="loginEmail"></label>
            <input className={`${styles['email-input']}`} onChange={e => {handleEmail(e.target.value)}} type="text" name="loginEmail" placeholder="email"></input>
            <label htmlFor="loginPassword"></label>
            <div className='mb-5 position-relative'>
              <input className={`${styles['password-input']} position-relative`} onChange={e => {handlePassword(e.target.value)}} type={showPassword ? 'text' : 'password'} name="loginPassword" placeholder="password">
              </input>
              <span className={`${styles['password-visibility']}`} onClick={togglePasswordVisibility}>
                {showPassword ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash"></i>}
              </span>
            </div>
            <button className={`${styles['login-btn']} w-100`} onClick={handleLogin()}>Login</button>
            <p className={`${styles.divider}`} >or login with</p>
            <button className={`${styles['google-btn']}`}>Google</button>
            <button className={`${styles['apple-btn']}`}>Apple</button>
            <p className={`${styles['no-account-text']} text-center`}>
              Don't have an account? <a href='/signup' className={`${styles['signup-anchor']}`}> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}