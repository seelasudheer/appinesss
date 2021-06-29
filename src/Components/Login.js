import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../Redux/Actions/LoginActon";
import './Login.css'
function Login(props) {
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.login && state.login.loginStatus)
      setStatus(state.login.loginStatus);
  }, [state]);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(Auth({ username, password }));
  };
  useEffect(() => {
    if (status) {
      if (status == "SUCCESS") {
        props.history.push("/dashboard");
      } else {
        setMessage("Invalid Login");
      }
    }
  }, [status]);

  return (
    <div className="content">
    
      <form className="card" onSubmit={(e) => loginUser(e)}>
       username: <input
          type="email"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>
        password: <input
          type="password"
          name="password"
          onChange={(e) => setPassowrd(e.target.value)}
          required
        /><br/>
         {message&&<p className="error">{message}</p>}
         
        <button>LOGIN</button>
      </form>
    </div>
  );
}
export default Login;
