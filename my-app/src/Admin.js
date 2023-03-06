import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthService from "./services/auth.service";
require("./reactBootstrapAuth.css");

class Admin extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div className="adminAuth">
        <nav className="navbar navbar-expand navbar-dark bg-dark" style={{height: "8vh"}}>
          <Link to={""} className="navbar-brand">
            ITSEALS
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={""} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"profile"} className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <Link to={"login"} className="nav-link" onClick={this.logOut}>
                LogOut
              </Link>
            </li>
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        </nav>
				<div>
					<Outlet />
				</div>
      </div>
    );
  }
}

export default Admin;
