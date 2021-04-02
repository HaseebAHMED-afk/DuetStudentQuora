import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userError, setUserError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  const login = async () => {
    let newLogin = {
      email,
      password,
    };

    await axios
      .post("http://localhost:5000/login", newLogin)
      .then((response) => {
        if (response.data === 404) {
          setUserError("User not found. Please Sign Up");
        } else if (response.data === 403) {
          setPasswordError("Incorrect Password");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    login();
  };
  return (
    <div className="login-page">
      <h1 className="login-heading">You need to login to continue</h1>
      <div className="login-form">
        <TextField
          variant="outlined"
          color="primary"
          label="Email"
          className="login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p style={{ color: "red" }}>{userError}</p>
        <TextField
          variant="outlined"
          color="primary"
          label="Password"
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p style={{ color: "red" }}>{passwordError}</p>
        <p style={{ fontFamily: "monospace", margin: 15 }}>
          Not a member?{" "}
          <span>
            {" "}
            <Link to="/signup">Sign Up</Link>{" "}
          </span>
        </p>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
