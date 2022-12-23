import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MallsTable from './components/mallsTable/MallsTable';
import SideBar from './components/SideBar';
import AllSAndC from './components/AllSAndC';
import Login from "./Login";
import Malls from './components/Malls';
import MallEdit from './components/mallsTable/mallsComponets/MallEdit';
import MallCreate from './components/mallsTable/mallsComponets/MallCreate';

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
    return (
      <>
        <Routes>
          <Route path='/' component={<Malls />} />
        </Routes>
      </>
    )
  }
}

export default App;
