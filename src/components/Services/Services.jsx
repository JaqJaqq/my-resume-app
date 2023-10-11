import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion'
import Resume from './resume.pdf'

const Services = () => {

    const transition = {duration: 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>

            {/* left side */}
            <div className='awesome'>
                <span style={{color: darkMode? 'white': ''}}>Why</span>
                <span>Hire me?</span>
                <span>
                    I'm a Full-Stack Developer training with high
                    level of experience
                    <br />
                    in web development, producting the Quality at TechUpTH.
                    <br />
                    <br />
                    I have worked on a project as a team using 
                    <br /> 
                    Agile and Scrum methodologies.
                    <br /> 
                    We conducted sprint planning and prioritized
                    <br /> 
                    our backlogs by scoring them using the Fibonacci sequence.
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
            </div>

            {/* right side */}
            <div className='cards'>
                
                <motion.div 
                whileInView={{left: '22rem'}}
                initial={{left: '29rem'}}
                transition={transition}
                style={{left: '22rem'}}>
                    <Card
                    emoji={"/icon/icon1.png"}
                    heading={"Communicative"}
                    detail={"Good communication and good listener"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div 
                whileInView={{left: '-1rem'}}
                initial={{left: '-8rem'}}
                transition={transition}
                style={{top: '12rem', left: '-1rem'}}>
                    <Card
                    emoji={"/icon/icon2.png"}
                    heading={"Professional"}
                    detail={"HTML, CSS, JavaScript, React, NodeJS, MySQL, Python, Django"}
                    />
                </motion.div>
                {/* third card */}
                <motion.div
                whileInView={{left: '20rem'}}
                initial={{left: '27rem'}}
                transition={transition} 
                style={{top: '25rem', left: '20rem'}}>
                    <Card
                    emoji={"/icon/icon3.png"}
                    heading={"Collaborative"}
                    detail={"Good teamwork and Community Support for React Development Project"}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Services;