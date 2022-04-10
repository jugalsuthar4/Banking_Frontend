import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { loginContext } from "../App";
import SessionManager from "clientside-session-manager";
import { useNavigate, Link } from "@reach/router";
function ShowBalance() {
  let user = SessionManager.getAll().id;
  console.log(SessionManager.exists());
  const [data, setData] = useState();
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/findone/${user}`)
      .then((data) => setData(data.data.user))
      .catch((err) => console.log("something went wrong"));
  }, []);
  const logout = () => {
    SessionManager.destroy(false);
    alert("You are logged out");
    navigate("/", { replace: true });
  };
  console.log(data);
  return (
    <>
      {data && (
        <div className="container mt-5">
          <h1 className="text-primary text-center">The sparks Banks</h1>
          <hr className="text-secondary" />
          <h1 className="text-danger text-center">Hey👋 {data[0].name} </h1>
          <h1 className="text-info text-center my-5">
            Your account Balance is {data[0].balance}
          </h1>
          <div className="row justify-content-md-center">
            <div className="col-4 col-md-1">
              <button type="button" class="btn btn-primary " onClick={logout}>
                Logout
              </button>
            </div>
            <div className="col-4 col-md-2">
              <button type="button" class="btn btn-warning">
                <Link to="/passbook">ShowTransaction</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBalance;
