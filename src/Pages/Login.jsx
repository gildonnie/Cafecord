import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function Login() {

  return (
    <div><Link to='/Chat'><Button variant="info">Chat</Button></Link>{' '}</div>
  )
}

export default Login;