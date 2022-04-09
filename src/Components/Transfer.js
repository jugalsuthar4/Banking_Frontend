import React, { useEffect, useState } from "react";
import "./Transfer.css";
import axios from "axios";
import Payment from "../images/payment.jpg";
import { isForOfStatement } from "@babel/types";
import { useNavigate } from "@reach/router";

function Transfer(props) {
  const [Data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [Recipient, setRecipient] = useState();
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleTransfer = (e) => {
    e.preventDefault();
    if (currentUser[0].balance < amount) {
      alert("Insufficient Balance");
      setAmount("");
      setRecipient("");
    } else {
      axios
        .post("https://banking-mern-backend.herokuapp.com/transaction", {
          sender: currentUser[0]._id,
          reciever: Recipient,
          amount: amount,
        })
        .then(() => {
          alert("transaction successfull");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          }
          alert("transaction failed");
          navigate("/", { replace: true });
        });
    }
  };

  useEffect(() => {
    fetch("https://banking-mern-backend.herokuapp.com/getcustomers")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
    setLoading(false);
  }, []);
  useEffect(() => {
    axios
      .post("https://banking-mern-backend.herokuapp.com/singlecustomer", {
        id: props.id,
      })
      .then((customerData) => {
        console.log(customerData.data.data);
        setCurrentUser(customerData.data.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        alert("something went wrong");
        navigate("/", { replace: true });
      });
  }, []);

  !loading && console.log(Data);
  return (
    !loading && (
      <>
        <div className="transfer-money">
          <div className="transfer-left-div">
            <h1>Transfer Money 💸</h1>
            <div className="transfer-sender-details">
              <h2>
                <u>Sender Detail</u>
              </h2>
              {currentUser &&
                currentUser.map((user) => {
                  return (
                    <>
                      <h5> Name : {user.name}</h5>
                      <h5>Email : {user.email}</h5>
                      <h5>Balance : {user.balance} </h5>
                    </>
                  );
                })}
            </div>
            <div class="form-div">
              <form>
                <div className="select">
                  <select
                    required
                    onChange={(e) => setRecipient(e.target.value)}
                  >
                    <option value="1" selected disabled>
                      Select Recipient
                    </option>
                    {Data &&
                      Data.map((eachData) => {
                        return (
                          currentUser &&
                          eachData.name != currentUser[0].name && (
                            <option value={eachData._id}>
                              {eachData.name}
                            </option>
                          )
                        );
                      })}
                  </select>
                </div>
                <input
                  type="number"
                  value={amount}
                  className="amount-input"
                  placeholder="Enter amount to tranfer"
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="transfer-button"
                  onClick={handleTransfer}
                >
                  transfer
                </button>
              </form>
            </div>
          </div>
          <div className="transfer-right-div">
            <img src={Payment} alt="payment-image" />
          </div>
        </div>
      </>
    )
  );
}

export default Transfer;
