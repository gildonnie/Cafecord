import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function Login() {

  return (
    <div><Link to='/Chat'><Button variant="info">Login</Button>{' '}</Link></div>
  )
}

export default Login;