import React from 'react'
import {Route,Routes,Link} from 'react-router-dom';
import AllSAndC from './AllSAndC';
import Malls from './Malls';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AllSAndC_Rest from './AllSAndC_Rest';
import AllSAndC_Stores from './AllSAndC_Stores';
import AllSAndC_SAndE from './AllSAndC_SAndE';
import Categories from './Categories';
const SideBar = (props) => {
  return (
    <div style={{display:'flex'}}>
    <div className= 'col-2 min-vh-100 sidebar'>
    <div className='row pt-6'>
      <div className='col-8 admin_panel pt-2'>
      <img className='alt' src='/src/img/Oval.png' width="50" height="50"></img> <span className='ms-2' >admin pannel</span>
      </div>
      </div>
       <ul className='container'>
        <il className='row'>
          <Link to={"/admin/malls"} className = 'col-12 ml px-2'>
            <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Malls</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/categories"} className = 'col-12 ml px-2'>
            <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Categories</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/allcaffes"} className = 'col-12 ml-1 px-2' >
          <div className='link'>
            <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/stores"} className = 'col-12 ml px-2'>
          <div className='link'>
            <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Stores</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/restaurants"} className = 'col-12 ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Restaurants</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/services"} className = 'col-12 ml px-2'>
          <div className='link'>
            <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Services & Entertainment</span>
            </div>
          </Link>
        </il> 
       
       </ul>
    </div>
    <div className='col-10'>
      <Routes>
        <Route path='/' element={<Malls />}/>
        <Route path='/admin/malls' element={<Malls />}/>
        <Route path='/admin/categories' element={<Categories />}/>
        <Route path='/admin/allcaffes' element={<AllSAndC />}/>
        <Route path='/admin/stores' element={<AllSAndC_Stores />}/>
        <Route path='/admin/restaurants' element={<AllSAndC_Rest />}/>
        <Route path='/admin/services' element={<AllSAndC_SAndE />}/>
      </Routes>
    </div>
  </div>
  )
}

export default SideBar