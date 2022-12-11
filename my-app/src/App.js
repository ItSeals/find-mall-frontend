import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FirstPageMain from './components/FirstPageMain';
 
function handleDelete(){
  const dashboard = document.querySelector('.js-button');
  const col5 = document.querySelector('.js-col-5');
  dashboard.addEventListener('click', ()=> {
  col5.classList.toggle('minify');
    });
}
function SideBar(){
  return(
    <div className= 'container-fluid'>
      <div className ='row'>
        <div className= 'col-2 min-vh-100'>
          <div className='admin_panel pt-2'>
          <img className='alt' src='/src/img/Oval.png' width="50" height="50"></img> <span className='ms-2' >admin pannel</span>
          </div>
           <ul>
            <il>
              <a href = '' className = 'nav-link ml px-2'>
                <div className='link'>
                <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Malls</span>
                </div>
              </a>
            </il>
            <il >
              <a href='' className = 'nav-link ml-1 px-2' >
              <div className='link'>
                <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
                </div>
              </a>
            </il>
            <il>
              <a href='' className = 'nav-link ml px-2'>
              <div className='link'>
                <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Stores</span>
                </div>
              </a>
            </il>
            <il>
              <a href='' className = 'nav-link ml-1 px-2'>
              <div className='link'>
                <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Restaurants</span>
                </div>
              </a>
            </il>
            <il>
              <a href= ''className = 'nav-link ml px-2'>
              <div className='link'>
                <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Services & Entertainment</span>
                </div>
              </a>
            </il> 
            <il>
              <div className='nav-link ml-1 px-2'>
              <div className='link'>
                <i className ='bi bi-shop ms-5 '></i> <span className = 'ms-2 d-none d-sm-inline'>Categories</span>  <button   className='button js-button' onClick={() => handleDelete()}><i class="bi bi-chevron-down"></i></button>
                </div>
              </div>
                <ul className='dashboard js-col-5'>
                <il>
              <a href='' className = 'nav-link ml px-2'>
              <div className='link'>
                <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Clothes</span>
                </div>
              </a>
            </il>
            <il>
              <a href='' className = 'nav-link ml-1 px-2'>
              <div className='link'>
                <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Food</span>
                </div>
              </a>
            </il>
            <il>
              <a href= ''className = 'nav-link ml px-2'>
              <div className='link'>
                <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Hardware</span>
                </div>
              </a>
            </il> 
            <il>
              <a href= ''className = 'nav-link ml-1 px-2'>
              <div className='link'>
                <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Beauty & Health</span>
                </div>
              </a>
            </il> 

                </ul>
            </il>
           </ul>
        </div>
        <div className='col gx-0'>
          <FirstPageMain/>
        </div>
      </div>
    </div>
    
  )
}

export default SideBar;
