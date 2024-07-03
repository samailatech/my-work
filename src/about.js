import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <img src="about-image.jpg" alt="About Image" />
      <h2>Our Mission</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <h2>Our Team</h2>
      <ul>
        <li>
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li>
          <img src="team-member-2.jpg" alt="Team Member 2" />
          <h3>Jane Doe</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
      </ul>
    </div>
  );
}

export default About;