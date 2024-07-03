import React from "react";
import './App.css'

function FeaturedProject(){
    return(
        <section className="Featured-Project">
            <h2>featured Project</h2>
            <img src="project-image.png" alt="Project Image"/>
            <h3>Project Name</h3>
            <p>lorem ipsum dolor sit amet, consectetur adipiscina elit. sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <ul>
                <li>feature 1</li>
                <li>feature 2</li>
                <li>feature 3</li>
            </ul>
            <button>learn more</button>
        </section>
    );
}
 export default FeaturedProject