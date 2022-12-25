import React from 'react'
import {Route,Routes,Link} from 'react-router-dom';
import AllSAndC from './AllSAndC';
import Malls from './Malls';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const SideBar = (props) => {
  return (
    <div className= 'container-fluid' style={{display:'flex'}}>
    <div className= 'col-2 min-vh-100 sidebar'>
    <div className='row pt-6'>
      <div className='col-8 admin_panel pt-2'>
      <img className='alt' src='/src/img/Oval.png' width="50" height="50"></img> <span className='ms-2' >admin pannel</span>
      </div>
      </div>
       <ul className='container'>
        <il className='row'>
          <Link to={"/malls"} className = 'col-12 ml px-2'>
            <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Malls</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/allcaffes"} className = 'col-12 ml-1 px-2' >
          <div className='link'>
            <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/stores"} className = 'col-12 ml px-2'>
          <div className='link'>
            <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Stores</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/restaurants"} className = 'col-12 ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Restaurants</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/services"} className = 'col-12 ml px-2'>
          <div className='link'>
            <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Services & Entertainment</span>
            </div>
          </Link>
        </il> 
       
       </ul>
    </div>
    <div className='col-10'>
      <Routes>
        <Route path='/' element={<Malls/>}/>
        <Route path='/malls' element={<Malls/>}/>
        <Route path='/allcaffes' element={<AllSAndC/>}/>
        <Route path='/stores' element={<Malls/>}/>
        <Route path='/restaurants' element={<Malls/>}/>
        <Route path='/services' element={<Malls/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default SideBar