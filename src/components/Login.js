import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../data/UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [signUp,setSignUp] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit =(e) => {
    e.preventDefault();
    setUser({...signUp})
  };
  return (
    <>
        <section>
          <p>{user.name}</p>
          <h1> Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id=""
              autoComplete="off"
              onChange={(e) => setSignUp({...signUp, name: e.target.value })}
              required
            />
            <input
              type="email"
              id=""
              autoComplete="off"
              onChange={(e) => setSignUp({...signUp, email: e.target.value })}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setSignUp({...signUp, password: e.target.value })}
              required
            />
            <label htmlFor="username">Username</label>
            <Link to="/yourprojects">
            <button type="submit">Sign in</button> 
            </Link>
          </form>
        </section>
    </>
  );
};

export default Login;
