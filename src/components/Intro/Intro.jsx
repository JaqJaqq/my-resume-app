import React from "react";
import './Intro.css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";

function Intro() {
    return (
     <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span>
            <span>Anurat Likitdachavong</span>
            <span>graduated of Bachelor of Science in Biology from Mahidol University
                <br />
                I have been a research assistant at Faculty of Pharmacy, Mahidol University for 2 years
                and I am interested in becoming a Full-stack Developer
            </span>
        </div>

        <button className="button i-button">Send Request</button>
        <div className="i-icons">
            <a href="https://github.com/JaqJaqq">
                <img src="/icon/github.png" alt="github" width={100}/>
            </a>
            <img src="/icon/linkedin.png" alt="linkedin" width={100}/>
            <img src="/icon/ig.png" alt="instagram" width={100}/>
        </div>

        </div>
        <div className="i-right">
            <img src="/icon/bullet.png" width={200}/>
            <img src="/icon/bullet.png" width={200}/>
            <img src="/icon/man1.png" alt="man" width={400}/>
            <img src="/icon/emoji.png" alt="emoji" width={100}/>
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