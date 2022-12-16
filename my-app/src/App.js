import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SideBar(){
  return(
    <div className= 'container-fluid'>
        <div className= 'col-2 min-vh-100'>
        <div className='row pt-6'>
          <div className='col-8 admin_panel pt-2'>
          <img className='alt' src='/src/img/Oval.png' width="50" height="50"></img> <span className='ms-2' >admin pannel</span>
          </div>
          </div>
           <ul className='container'>
            <il className='row'>
              <a href = '/pagr/page1.js' className = 'col-12 ml px-2'>
                <div className='link'>
                <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Malls</span>
                </div>
              </a>
            </il>
            <il className='row'>
              <a href='/pagr/page2.js' className = 'col-12 ml-1 px-2' >
              <div className='link'>
                <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
                </div>
              </a>
            </il>
            <il className='row'>
              <a href='' className = 'col-12 ml px-2'>
              <div className='link'>
                <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Stores</span>
                </div>
              </a>
            </il>
            <il className='row'>
              <a href='' className = 'col-12 ml-1 px-2'>
              <div className='link'>
                <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Restaurants</span>
                </div>
              </a>
            </il>
            <il className='row'>
              <a href= '' className = 'col-12 ml px-2'>
              <div className='link'>
                <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Services & Entertainment</span>
                </div>
              </a>
            </il> 
           
           </ul>
        </div>
      </div>
    
  )
}

export default SideBar;
