import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FirstPageMain from './components/FirstPageMain';
import SideBar from './components/SideBar';

function App(){
  return(
    <div className= 'container-fluid'>
      <div className ='row'>
        <SideBar className='col-2 min-vh-100'/>
        <div className='col gx-0'>
          <FirstPageMain/>
        </div>
      </div>
    </div>
    
  )
}

export default App;
