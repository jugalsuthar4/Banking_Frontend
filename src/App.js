import React from "react";
import Home from "./Components/Home";
import { Router } from "@reach/router";
import "./App.css";
import Customers from "./Components/Customers";
import Transfer from "./Components/Transfer";
import Transaction from "./Components/Transaction";
import Login from "./Components/Login";
import Signup from "./Components/Singup";

function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <Customers path="/customers" />
        <Transfer path="/transfer/:id" />
        <Transaction path="/transaction" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    </>
  );
}

export default App;
