import React from "react";
import './App.css'

function Navigation(){
    return(
        <nav className="Navigation">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href='/about'>About us</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation