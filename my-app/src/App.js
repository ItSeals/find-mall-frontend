import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Malls from './components/Malls';
import SideBar from './components/SideBar';
import AllSAndC from './components/AllSAndC';

function App(){
  return(
    <div className= 'container-fluid'>
      <div className ='row'>
        <SideBar className='col-2 min-vh-100'/>
        <Malls className='col'/>
      </div>
    </div>
    
  )
}

export default App;
