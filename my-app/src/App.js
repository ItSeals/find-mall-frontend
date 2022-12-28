import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from './components/SideBar';
import './App.css';
import Login from "./Login";

function App() {
  const [success, setSuccess] = useState(true);

  if (success === false) {
    return (
      <main className="App">
        <Login success={success} setSuccess={setSuccess}/>
      </main>
    );
  } else {
    return(
      <SideBar/>
    )
  }
}

export default App;
