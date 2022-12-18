import React from 'react'

const SideBar = (props) => {
  function expandCollapseCategories(){
    const dashboard = document.querySelector('.js-button');
    const col5 = document.querySelector('.js-col-5');
    dashboard.addEventListener('click', ()=> {
    col5.classList.toggle('minify');
      });
  }

  return (
    <div className={props.className}>
      <div className='admin_panel pt-2'>
      <img className='alt' src='/src/img/Oval.png' width="50" height="50"></img> <span className='ms-2' >admin pannel</span>
      </div>
       <ul>
        <li>
          <a href = '' className = 'nav-link ml px-2' onClick={() => props.sAP(1)}>
            <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Malls</span>
            </div>
          </a>
        </li>
        <li >
          <a href='' className = 'nav-link ml-1 px-2' onClick={() => props.sAP(1)}>
          <div className='link'>
            <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
            </div>
          </a>
        </li>
        <li>
          <a href='' className = 'nav-link ml px-2'>
          <div className='link'>
            <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Stores</span>
            </div>
          </a>
        </li>
        <li>
          <a href='' className = 'nav-link ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Restaurants</span>
            </div>
          </a>
        </li>
        <li>
          <a href= ''className = 'nav-link ml px-2'>
          <div className='link'>
            <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Services & Entertainment</span>
            </div>
          </a>
        </li> 
        <li>
          <div className='nav-link ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-shop ms-5 '></i> <span className = 'ms-2 d-none d-sm-inline'>Categories</span>  <button   className='button js-button' onClick={() => expandCollapseCategories()}><i className="bi bi-chevron-down"></i></button>
            </div>
          </div>
            <ul className='dashboard js-col-5'>
            <li>
          <a href='' className = 'nav-link ml px-2'>
          <div className='link'>
            <i className ='bi bi-cart3 ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Clothes</span>
            </div>
          </a>
        </li>
        <li>
          <a href='' className = 'nav-link ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-shop ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Food</span>
            </div>
          </a>
        </li>
        <li>
          <a href= ''className = 'nav-link ml px-2'>
          <div className='link'>
            <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Hardware</span>
            </div>
          </a>
        </li> 
        <li>
          <a href= ''className = 'nav-link ml-1 px-2'>
          <div className='link'>
            <i className ='bi bi-joystick ms-5' ></i> <span className= 'ms-2 d-none d-sm-inline'>Beauty & Health</span>
            </div>
          </a>
        </li> 

            </ul>
        </li>
       </ul>
    </div>
  )
}

export default SideBar