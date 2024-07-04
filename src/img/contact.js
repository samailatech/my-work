import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button>Send Message</button>
      </form>
      <h2>Address</h2>
      <p>123 Main St, Anytown, USA 12345</p>
      <h2>Phone</h2>
      <p>555-555-5555</p>
      <h2>Email</h2>
      <p>info@yourcompany.com</p>
    </div>
  );
}

export default Contact;