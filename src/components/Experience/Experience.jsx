import React from "react";
import './Experience.css'; 
import ParticlesContainer from "../Particles/Particles";

const Experience = () => {
    return (
        <div className="experience" id="Experience">
            {/* <ParticlesContainer /> */}
            <div className="achievement">
                <div className="circle">1</div>
                <span>year</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">0</div>
                <span>companies</span>
                <span>Work</span>
            </div>
            {/* <ParticlesContainer /> */}
        </div>
    )
}

export default Experience