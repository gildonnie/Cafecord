import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/LoginBox.css'; 

const LoginBox = () => (
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
            <form>
              {['Username', 'Password'].map((label) => (
                <div className="mb-3 form-group" key={label}>
                  <input
                    type={label === 'Password' ? 'password' : 'text'}
                    className="form-control input"
                    placeholder={` ${label.toLowerCase()}`}
                  />
                  
                </div>
              ))}
              <button type="button" className="button">
                Login
              </button>
              <button type="button" className="button">
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

export default LoginBox;
