import React from "react";
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className="footer">
            <img src="/icon/footer.png" alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>anurat.lik@gmail.com</span>
                <div className="f-icon">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Github color='white' size='3rem' />
                </div>
                <img src="/icon/copyright.png" alt="" />
            </div>
        </div>
    )
}

export default Footer