import React, { useEffect, useState } from "react";
import SessionManager from "clientside-session-manager";
import axios from "axios";
import { useNavigate } from "@reach/router";
function ShowTransaction() {
  const [transaction, setTransaction] = useState("");
  console.log(transaction);
  let user = SessionManager.getAll().id;
  console.log(SessionManager.exists());
  const [data, setData] = useState();
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/passbook/${user}`)
      .then((data) => setTransaction(data.data.data));
  }, []);
  return (
    <div className="container">
      <div className="">
        <h2 className="text-center">All transaction details</h2>
        <table className="table text-dark text-center">
          <tr className="text-danger">
            <td scope="col">Sender</td>
            <td>Recipient</td>
            <td>Amount</td>
            <td>Time</td>
            <td>Date</td>
          </tr>
          <br />
          {transaction &&
            transaction.map((currentData) => {
              return (
                <tr className="">
                  <td scope="row">{currentData.sender}</td>
                  <td>{currentData.receiver}</td>
                  <td>{currentData.amount} ₹</td>
                  <td>{currentData.time}</td>
                  <td>{currentData.date}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default ShowTransaction;
