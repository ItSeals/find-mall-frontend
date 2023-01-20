import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { global, networkCall } from ".././helpers/helpers";
import AllSAndC from "./AllSAndC";
import Malls from "./Malls";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Categories from "./Categories";
import SorCCategory from "./allSAndC/SorCCategory";

const SideBar = (props) => {
  return (
    <div style={{display:'flex'}}>
    <div className= 'col-2 min-vh-100 sidebar overflow-auto' style={{height: "100vh"}}>
    <div className='row pt-6' style={{marginRight: "0"}}>
      <div className='col-8 admin_panel pt-2'>
      <img className='alt' src={require('../img/TonyStarkPhoto.PNG')} width="50" height="50" style={{borderRadius: "50%"}}></img> <span className='ms-2' >admin pannel</span>
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
          <Link to={"/admin/categories"} className = 'col-12 ml-1 px-2'>
            <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className= 'ms-2 d-none d-sm-inline'>Categories</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/tags"} className = 'col-12 ml px-2' >
          <div className='link'>
            <i className ='bi bi-circle ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>Tags</span>
            </div>
          </Link>
        </il>
        <il className='row'>
          <Link to={"/admin/items"} className = 'col-12 ml-1 px-2' >
          <div className='link'>
            <i className ='bi bi-bag ms-5'></i> <span className = 'ms-2 d-none d-sm-inline'>All stores & cafes</span>
            </div>
          </Link>
        </il>
        {props.categories.map((category, index) => {
          return (
            <il className="row">
              <Link
                to={`/admin/items/${category.id}`}
                className={`col-12 ${index % 2 === 0 ? "ml" : "ml-1"} px-2`}
              >
                <div className="link">
                  <i className="bi bi-cart3 ms-5"></i>{" "}
                  <span className="ms-2 d-none d-sm-inline">
                    {category.title}
                  </span>
                </div>
              </Link>
            </il>
          );
        })}
      </ul>
    </div>
    <div className='col-10'>
      <Outlet />
    </div>
  </div>
  )
};

export default SideBar;