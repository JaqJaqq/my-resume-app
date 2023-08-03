import React from 'react';
import './Services.css';
import Card from '../Card/Card';

const Services = () => {
    return (
        <div className='services'>

            {/* left side */}
            <div className='awesome'>
                <span>Why</span>
                <span>Hire me?</span>
                <span>
                    I'm a Full-Stack Developer training with high
                    level of experience
                    <br />
                    in web development, producting the Quality at TechUpTH.
                </span>
                <a href="#">
                    <button className='button s-button'>Download CV</button>
                </a>
            </div>

            {/* right side */}
            <div className='cards'>
                
                <div style={{left: '18rem'}}>
                    <Card
                    emoji={"/icon/icon1.png"}
                    heading={"Communicative"}
                    detail={"Good communication and good listener"}
                    />
                </div>
                {/* second card */}
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji={"/icon/icon2.png"}
                    heading={"Professional"}
                    detail={"HTML, CSS, JavaScript, React, NodeJS, MySQL, Python, Django"}
                    />
                </div>
                {/* third card */}
                <div style={{top: '25rem', left: '15rem'}}>
                    <Card
                    emoji={"/icon/icon3.png"}
                    heading={"Collaborative"}
                    detail={"Good teamwork and Community Support for React Development Project"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;