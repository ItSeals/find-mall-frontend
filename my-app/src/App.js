import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Malls from './components/Malls';
import SideBar from './components/SideBar';
import AllSAndC from './components/AllSAndC';
import './App.css';
import Login from "./Login";
import {BrowserRouter} from 'react-router-dom';
function App() {
  const [success, setSuccess] = useState(true);
  const [activePage, setActivePage] = useState(1)

  if (success == false) {
    return (
      <main className="App">
        <Login AP={setActivePage} success={success}/>
      </main>
    );
  } else {
    return(
      
     <SideBar/>
    )
  }
}

export default App;
