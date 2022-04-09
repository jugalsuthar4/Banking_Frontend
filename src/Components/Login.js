import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "@reach/router";

function Login() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || pin === "") {
      alert("please fill from properly");
      return;
    } else {
      axios
        .post("https://banking-mern-backend.herokuapp.com/login", {
          email,
          pin,
        })
        .then((data) => {
          if (data.status == 200) {
            console.log(data.data.data);
            navigate(`/transfer/${data.data.data}`, { replace: true });
          }
        })
        .catch((err) => console.log("error"));
    }
  };
  return (
    <div class="container my-5">
      <div class="login">
        <div class="mb-3 justify-content-md-center row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10 col-md-4">
            <input
              type="text"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 justify-content-md-center row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Pin Number
          </label>
          <div class="col-sm-10 col-md-4">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 justify-content-md-center row">
          <button
            type="button"
            class="btn btn-primary col-sm-10 col-md-1"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
