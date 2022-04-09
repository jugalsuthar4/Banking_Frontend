import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "@reach/router";

function Singup() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [coPin, setCoPin] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (email === "" || pin === "" || coPin === "" || phone == "") {
      alert("Please fill form properly");
      return;
    } else if (pin !== coPin) {
      alert("Pin and confirm pin should be same");
      return;
    } else {
      axios
        .post("https://banking-mern-backend.herokuapp.com/signup", {
          email,
          pin,
          phone,
        })
        .then((data) => {
          if (data.status === 200) navigate("/login", { replace: true });
        })
        .catch((data) => {
          if (data.status === 500) alert("something went wrong");
        });
    }
    setEmail("");
    setPin("");
    setCoPin("");
    setPhone("");
  };
  return (
    <div className="container my-5">
      <div class="signup">
        <div class="mb-3 justify-content-md-center row">
          <label for="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10 col-md-4">
            <input
              type="Email"
              class="form-control"
              id="email"
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
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Confirm Pin
          </label>
          <div class="col-sm-10 col-md-4">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              value={coPin}
              onChange={(e) => setCoPin(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 justify-content-md-center row">
          <label for="text" class="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div class="col-sm-10 col-md-4">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 justify-content-md-center row">
          <button
            type="button"
            class="btn btn-primary col-sm-10 col-md-1"
            onClick={(e) => register(e)}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Singup;
