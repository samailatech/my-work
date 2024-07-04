import React from "react";
import './App.css'
import proPhoto1 from './img/pro1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from "./slide";

function FeaturedProject(){
    return(
        <section className="Featured-Project">
            <h2>featured Project</h2>
            <Slideshow />
            <h3>TechForge</h3>
            <p>Based on the name 'TechForge' and the fact that it's an IT project, so TechForge focuses on Development of innovative software solutions, building a community for IT professionals and enthusiasts,</p>
            <ul>
                <li>A project management tool for developers</li>
                <li>A knowlegde base or wiki for IT related topic</li>
               <li>A community forum or discussion board</li>
                <li>A resource library for tutorials, webinars, and online courses</li>
                <li>A showcase for member projects and achievements</li> 
            </ul>
            <button>learn more</button>
        </section>
    );
}
 export default FeaturedProject