import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <ul>
        <li>
          <img src="project1.jpg" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="btn">View Details</a>
        </li>
        <li>
          <img src="project2.jpg" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="btn">View Details</a>
        </li>
        <li>
          <img src="project3.jpg" alt="Project 3" />
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="btn">View Details</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;