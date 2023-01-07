import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import { User } from "../App";
import { Sign_in } from "../assets";

function Login() {
  const Navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const Data = {
      email,
      password,
    };
    localStorage.setItem("form", JSON.stringify(Data));
    if (email === "admin" && password === "admin") {
      setLoggedIn(true);
      Navigate("/dashboard");
    } 
  };

  useEffect(() => {
    let storedData = localStorage.getItem("form");
    if(!storedData) return;
    let result = JSON.parse(storedData);
    setEmail(result.email);
    setPassword(result.password);
  }, []);

  return (
    <div className="login">
      <main>
        <div className="left">
          <img src={Sign_in} alt="Sign in" />
        </div>
        <div className="right">
          <h1>Welcome!</h1>
          <p> Enter details to login.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Forgot password?</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
