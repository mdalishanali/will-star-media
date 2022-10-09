import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";
const Navbar = () => {
  return (
    <div >
      
        <nav className="navbar navbar-expand-lg navbar-dark" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Case Study</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Media 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                    <li><a className="dropdown-item" href="#">Media Presence</a></li>
                    <li><a className="dropdown-item" href="#">Podcast</a></li>
                    <li><a className="dropdown-item" href="#">Videos</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About  
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Team</a></li>
                    <li><a className="dropdown-item" href="#">Career</a></li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <div className="letsTalk">
                  <div >Let’s Talk</div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        
      
    </div>
  );
};

export default Navbar;
