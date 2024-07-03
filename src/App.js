import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import FeaturedProject from './featuredProject';
import Testimonial from './testimonial';
import ContactForm from './contactForm';
import Footer from './footer';
import About from './about';


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>welcome to samtech</h1>
       <p>Your trusted IT partner for innovative solutions</p>
      </header>
      <section className='features'>
        <h2>Our Expertise</h2>
        <ul>
          <li>Web Development</li>
          <li>Cloud Services</li>
          <li>CyberSecurity</li>
          <li>Data analytics</li>
        </ul>
      </section>
      <section className='featuredProject'>
        <FeaturedProject />
      </section>
      <section className='testimonial'>
        <Testimonial />
      </section>
      <section className='callToAction'>
        <h2>Get in touch</h2>
        <p>contact us for a free consultation.</p>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
