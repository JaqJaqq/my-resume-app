import React, { useState } from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll"

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
        setClicked(!clicked);
    };

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">JaqJaqq</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul 
                        id="navbar" 
                        className={clicked ? "navbar active" : "navbar"} 
                        style={{listStyleType: "none"}}
                    >

                        <Link spy={true} to='Home' smooth={true} offset={-60} activeClass="activeClass">
                            <li className="active">Home</li>
                        </Link>
                        <Link spy={true} to='Services' offset={-120} smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' offset={-180} smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' offset={-120} smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' offset={-120} smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <div className={isActive ? 'container change' : 'container'} onClick={handleToggle}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button">
                        Contact me
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;