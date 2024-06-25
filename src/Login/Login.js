import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };

    axios.post("https://dummyjson.com/auth/login", payload)
      .then((response) => {
        if (response.data.username === username) {
          localStorage.setItem("userdata", JSON.stringify(response.data));
          setError("");
          navigate("/Loginshow");
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((err) => {
        setError("An error occurred during login. Please try again.");
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h5
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "50px",
          }}
        >
          Log In
        </h5>
        <div className="form-outline mb-4">
          <input
            type="text"
            value={username}
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label className="form-label" htmlFor="form2Example1">
            UserName
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
