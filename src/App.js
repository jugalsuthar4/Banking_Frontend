import React from 'react'
import Home from  "./Components/Home"
import {Router} from "@reach/router"
import "./App.css"
import Customers from "./Components/Customers"
import Transfer from "./Components/Transfer"
import Transaction from './Components/Transaction'

function App() {
  return (
    <>
    <Router>
      <Home path="/" />
      <Customers path="/customers"/>
      <Transfer path="/transfer/:id" />
      <Transaction path="/transaction"/>
    </Router>
    </>
  )
}

export default App
