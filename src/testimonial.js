import React from "react";
import client from './img/client.jpg'
function Testimonial(){
    return(
        <section className="testimonial">
            <img src={client} alt="Client Image"/>
            <h3>Client Name: John Doe</h3>
            <h4>Company: ABC Corporation</h4>
            <h5>Testimonial:</h5>
            <p>we have been working with Samtech for several months now, and their expertise in IT solutions has been invaluable to our buisness.Their team is responsive,professional, and always goes above and beyond to ensure our needs are met. Their innovative approach to problem-solving and saved us time and resources, and we couldn't be happier with the results.we highly recommend Samtech to anyone looking for top-notch IT</p>
            <span>Samtech</span>
        </section>
    );
}
export default Testimonial