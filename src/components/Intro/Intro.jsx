import React from "react";
import './Intro.css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Intro() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
     <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
            <span>Anurat Likitdachavong</span>
            <span style={{color: darkMode? 'white': ''}}>graduated of Bachelor of Science in Biology from Mahidol University
                <br />
                I have been a research assistant at Faculty of Pharmacy, Mahidol University for 2 years
                and I am interested in becoming a Full-stack Developer
            </span>
        </div>

        <button className="button i-button">Send Request</button>
        <div className="i-icons">
            <a href="https://github.com/JaqJaqq">
                <img src="/icon/github.png" alt="github" width={100} style={{background: darkMode? 'wheat': ''}}/>
            </a>
            <a href="https://www.linkedin.com/in/anurat-likitdachavong-161740275/">
                <img src="/icon/linkedin.png" alt="linkedin" width={100} style={{background: darkMode? 'wheat': ''}}/>
            </a>
            <a href="#">
                <img src="/icon/ig.png" alt="instagram" width={100} style={{background: darkMode? 'wheat': ''}}/>
            </a>
        </div>

        </div>
        <div className="i-right">
            <img src="/icon/bullet.png" width={200}/>
            <img src="/icon/bullet.png" width={200}/>
            <img src="/icon/man1.png" alt="man" width={500}/>

            <div style={{top: '10%', left: '-15%'}}>
                <FloatingDiv image={"/icon/icon4.png"} txt1='Web' txt2='Developer' />
            </div>
            <div>

            </div>
        </div>
     </div>
    )
};

export default Intro;