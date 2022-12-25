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
import AllSAndC_SAndE from './components/AllSAndC_SAndE';
function App() {
  const [success, setSuccess] = useState(true);
  const [activePage, setActivePage] = useState(1)

  if (success == false) {
    return (
      <main className="App">
        <Login AP={setActivePage} success={success} />
      </main>
    );
  } else {
    return(
      <div className= 'container-fluid'>
        <div className ='row'>
          <SideBar className='col-2 min-vh-100' sAP={setActivePage} />
          <Routes>
            <Route path='/' element={<Malls className='col gx-0 text-center' />} />
            <Route path='/AllSAndC' element={<AllSAndC className='col gx-0 text-center' />} /> {/*Додати атрибут searchCat, де значенням буде потрібна категорія, якщо потрібна лиш певна*/}
            <Route path='/AllSAndC/Stores' element={<AllSAndC_Stores className='col gx-0 text-center' />} />
            <Route path='/AllSAndC/Restaurants' element={<AllSAndC_Rest className='col gx-0 text-center' />} />
            <Route path='/AllSAndC/Services&Entertainment' element={<AllSAndC_SAndE className='col gx-0 text-center' />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
