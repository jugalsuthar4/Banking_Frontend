import React ,{useEffect,useState} from "react";
import "./Customers.css";
import transfer from "../images/transaction.png";
import {Link} from "@reach/router"
import axios from "axios";
import arrow from "../images/arrow.png"
function Customers() {
  const [customer,setCustomer]=useState([])


   
  useEffect(()=>{
    fetch("https://banking-mern-backend.herokuapp.com/getcustomers")
          .then((response) => response.json())
          .then((data) => {
            setCustomer(data.data);
          });

  },[])
  console.log(customer)
  return (
    <div className="customers">
      <h2>Our Customers</h2>
      <table>
        <tr style={{ color: "grey" }}>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>current Balance</th>
          <th>transfer</th>
        </tr>
        <br />
      
      {
        customer.map((eachCustomer)=>{
          return ( <tr className="data-tr">
          <td>{eachCustomer.customerID}</td>
          <td>{eachCustomer.name}</td>
          <td>{eachCustomer.email}</td>
          <td>{eachCustomer.balance} ₹</td>
          <td>
            <Link to={`/transfer/${eachCustomer._id}`}><img src={transfer} className="transfer-icons" alt="transfer" /></Link>
            
          </td>
        </tr>
          )
        })
      }     
      </table>
      <div className="back-arrow">
         <Link to="/" className="back-arrow-link"><img src={arrow} alt="Back" className="arrow-back" /></Link>
      </div>
    </div>
  );
}

export default Customers;
