/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth, provider } from '../firebase.js';
import { signInWithPopup,  signInWithEmailAndPassword } from 'firebase/auth';
import LoginImg from '../assets/loginimg.png'
import '../Styles/LoginBox.css';
 // import axios from 'axios'; for api, but not sure what api we got goin on
 // error installing react-google-login and api is confusing

const LoginBox = () => {
  
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        navigate('/Chat')
    } catch (error) {
      console.error('Login fail', error);
    }
  };

     //sign in with google
     const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, provider);
        navigate('/Chat')
      } catch (error) {
        console.error(error.message)
      }
    }
  
  return (
  <div className="login-box-container">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 nopadding">
          <img
            src={LoginImg}
            alt="coffee mugs"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 nopadding">
          <div className="p-4 rounded shadow login-container">
            <h2 className="text mb-5">Welcome to Cafecord!</h2>
            <form onSubmit={handleSubmit}>
              {['Email', 'Password'].map((label) => (
                <div className="mb-3 form-group" key={label}>
                  <input
                    type={label === 'Password' ? 'password' : 'text'}
                    className="form-control input"
                    placeholder={` ${label.toLowerCase()}`}
                    name={label.toLowerCase()}
                    value={credentials[label.toLowerCase()]}
                    onChange={handleChange}
                  />
                  
                </div>
              ))}
              <button type="submit" className="button">
                Login
              </button>
              <button onClick={signInWithGoogle} className="button">
                Login with Google
              </button>
            </form>
            <p className="mt-3 accounttext">
              Don't have an account? <Link to="./Signup">Sign up</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
              };

export default LoginBox;
