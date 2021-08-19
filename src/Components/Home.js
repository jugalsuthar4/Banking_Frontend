import React from "react";
import "./Home.css";
import BankImage from "../images/Banking_image.jpg";
import {Link} from "@reach/router"
function Home() {
  return (
    <div className="home">
      <div className="left-div">
        <h1 className="bank-name">
          <span className="the">THE</span>
          <br /> <span className="sparks">SPARKS</span> <br /> <span className="bank">BANK</span>
        </h1>
        <h3><Link className="link" to="/customers">View all Customers</Link></h3>
        <h3><Link className="link" to="/transaction">View all transaction</Link></h3>

      </div>

      <div className="right-div">
        <img src={BankImage} alt="BANK-IMAGE" />
      </div>
    </div>
  );
}

export default Home;
