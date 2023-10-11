import React from "react";
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className="footer">
            <div className="f-content">
                <div className="f-icon">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Github color='white' size='3rem' />
                </div>
                <p>Copyright © 2023 My resume app. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer