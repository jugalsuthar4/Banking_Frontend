import React, { useState, useEffect } from "react";
import "./Transaction.css";
import axios from "axios";
import {Link} from "@reach/router"
import arrow from "../images/arrow.png"
function Transaction() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://banking-mern-backend.herokuapp.com/transferdata")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log(data);
  return (
    <div className="transaction">
     <h2>All transaction details</h2>
      <table>
        <tr>
           
           <th>Sender</th>
          <th>Recipient</th>
          <th>Amount</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        <br />
        {data && data.map((currentData) => {
          return (
            <tr className="data-tr">
              <td>{currentData.sender}</td>
              <td>{currentData.receiver}</td>
              <td>{currentData.amount} ₹</td>
              <td>{currentData.time}</td>
              <td>{currentData.date}</td>
            </tr>
          );
        })}
      </table>
      <div className="back-arrow-transaction">
         <Link to="/" className="back-arrow-link"><img src={arrow} alt="Back" className="arrow-back" /></Link>
      </div>
    </div>
  );
}

export default Transaction;
