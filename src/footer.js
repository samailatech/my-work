import React from 'react';
import About from './about';
import { Col, Container, Row } from 'react-bootstrap';
import "./index.css"

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>
            <h3>About Us</h3>
            <About />
          <Col sm={6} md={4} lg={3}>
            <h3>Quick Links</h3>
            <div className='Navigation'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <h3>Follow Us</h3>
           <div className='SocialMedia'>
              <a href="#" className='Facebook'><i className="fa fa-facebook-f" /></a>
              <a href="#" className='Twitter'><i className="fa fa-twitter" /></a>
              <a href="#" className='LinkedIn'><i className="fa fa-linkedin-in" /></a>
           </div>
          </Col>
        </Col>
        <div className="row">
          <div className="col-md-12">
            <p>Copyright © 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;