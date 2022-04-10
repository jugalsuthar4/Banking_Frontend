import React, { useContext } from "react";
import { loginContext } from "../App";
import Login from "./Login";
import Home from "./Home";
import SessionManager from "clientside-session-manager";

function PrivateRoute() {
  let user = SessionManager.exists();
  return { user } ? <Login /> : <Home />;
}

export default PrivateRoute;
