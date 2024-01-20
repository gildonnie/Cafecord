import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import '../Styles/Login.css'
function Login() {

  return (
    <div className="loginBackground">
      <Link to='/Chat'><Button variant="info">Login</Button>{' '}</Link>
      <Link to='/EditProfile'><Button variant="info">Profile</Button>{' '}</Link>
    
    </div>
  )
}

export default Login;