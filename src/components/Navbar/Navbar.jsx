import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">JaqJaqq</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: "none"}}>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact me
                </button>
            </div>
        </div>
    )
};

export default Navbar;