import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Malls from './components/Malls';
import SideBar from './components/SideBar';
import AllSAndC from './components/AllSAndC';
import AllSAndC_Stores from './components/AllSAndC_Stores';
import AllSAndC_Rest from './components/AllSAndC_Rest';
import './App.css';
import Login from "./Login";

function App() {
  const [success, setSuccess] = useState(true);

  if (success == false) {
    return (
      <main className="App">
        <Login success={success} />
      </main>
    );
  } else {
    return(
      <SideBar/>
    )
  }
}

export default App;
