import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.css';
import logo from './img/IMG-20240702-WA0012.jpg';

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} width="50px"/>Samtech IT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" data-toggle='tooltip' data-placement="bottom" title="Home" href="/"><i className="fa fa-home"/><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle='tooltip' data-placement='bottom' title="About Us" href='/about'><i className="fa fa-info"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle='tooltip' data-placement='bottom' title="Services" href="#"><i className="fa fa-briefcase"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle='tooltip' data-placement='buttom' title="Contact Us" href="#"><i className="fa fa-envelope"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navigation