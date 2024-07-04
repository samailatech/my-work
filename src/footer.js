import React from 'react';
import "./index.css"
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
        <div className="col-md-4">
          <h3>Quick Links</h3>
          <ul>
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
        <div className="col-md-4">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#" className='Facebook'><i className="fa fa-facebook-f" /></a></li>
            <li><a href="#" className='Twitter'><i className="fa fa-twitter" /></a></li>
            <li><a href="#" className='LinkedIn'><i className="fa fa-linkedin" /></a></li>
            <li><a href="#" className='WhatsApp'><i className="fa fa-whatsapp" /></a></li>
            <li><a href="#" className='LinkedIn'><i className="fa fa-github" /></a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Copyright © 2023 Samtech. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);
}

export default Footer;