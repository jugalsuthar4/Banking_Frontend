import React, { createContext, useState } from "react";
import Home from "./Components/Home";
import { Router } from "@reach/router";
import "./App.css";
import Customers from "./Components/Customers";
import Transfer from "./Components/Transfer";
import Transaction from "./Components/Transaction";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import PrivateRoute from "./Components/PrivateRoute";
import ShowBalance from "./Components/ShowBalance";
import ShowTransaction from "./Components/ShowTransaction";
const loginContext = createContext();
function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <loginContext.Provider value={{ user, setUser }}>
        <Router>
          <PrivateRoute path="/" />
          <Customers path="/customers" />
          <Transfer path="/transfer/:id" />
          <Transaction path="/transaction" />
          <Login path="/login" />
          <Signup path="/signup" />
          <ShowBalance path="/showbalance" />
          <ShowTransaction path="/passbook" />
        </Router>
      </loginContext.Provider>
    </>
  );
}
export { loginContext };
export default App;
