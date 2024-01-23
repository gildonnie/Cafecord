import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/LoginBox.css';
 // import axios from 'axios'; for api, but not sure what api we got goin on
 // error installing react-google-login and api is confusing

const LoginBox = () => {
  
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // replace backend/api/login with whatever api thing we got
    try {
      const response = await axios.post('http://backend/api/login', credentials);
      // handle response + store authentication state
      console.log('Login Success', response.data);
    } catch (error) {
      console.error('Login fail', error);
    }
  };
  
  return (
  <div className="login-box-container">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 nopadding">
          <img
            src="../public/cafecord2.jpg"
            alt="stupid coffee"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 nopadding">
          <div className="p-4 rounded shadow login-container">
            <h2 className="text mb-5">Welcome to Cafecord</h2>
            <form onSubmit={handleSubmit}>
              {['Username', 'Password'].map((label) => (
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
              <button type="submit" className="button">
                Login with Google
              </button>
            </form>
            <p className="mt-3 accounttext">
              Don't have an account? <Link to="../Pages/Signup">Sign up</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
              };

export default LoginBox;
