import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      message
    };
    /*axios.get('http://localhost:8080/').then(
      response => {
        console.log(response.data);
      });*/
    axios.post('/api/form',formData).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.error(error);
    });
    setSubmitted(true);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <label for='name' className='col-sm-2 col-sm-1abel'>Name</label>
    <div className='col-sm-10'>
    <input type="text" value={name} className='form-control' id='name' placeholder='Enter your name' onChange={(event) => setName(event.target.value)} />
    </div>
      </div>
     <div className='form-group'>
     <label for='email' className='col-sm-2 col-form-label'>Email</label>
     <div className='col-sm-10'>
     <input type="email" className='form-control' id='email' placeholder='Enter your email' value={email} onChange={(event) => setEmail(event.target.value)} />
     </div>
     </div>
      <div className='form-group'>
      <label for='message' className='col-sm-2 col-form-label'>Message</label>
      <div className='col-sm-10'>
        <textarea value={message} className='form-control' id='message' placeholder='Enter your message' onChange={(event) => setMessage(event.target.value)} />
      </div>
      </div>
      <div className='form-group'>
        <div className='col-sm-10 offset-sm-2'>
          <button type="submit" className='btn btn-primary'>Send Message</button>
      {submitted ? <p>Thank you for contacting us!</p> : null}
        </div>
      </div>
    </form>
       
  );
}

export default ContactForm;