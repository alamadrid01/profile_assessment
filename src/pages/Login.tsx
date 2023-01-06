import React, {useState} from "react";
import "../styles/Login.scss";
import { Sign_in } from "../assets";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

  return (
    <div className="login">
      <main>
        <div className="left">
          <img src={Sign_in} alt="Sign in" />
        </div>
        <div className="right">
          <h1>Welcome!</h1>
          <p> Enter details to login.</p>
          <form>
            <input  type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input  type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <p>Forgot password?</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
