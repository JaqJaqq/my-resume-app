import React, { useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';

import { useRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0vvjf5', 'template_bey3vu7', form.current, '1Nd9aEHV0DUkQAcmS')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
  };
    return (
        <div className="contact-form" id="Contact">
            <div className="contact-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="contact-right">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message"  className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span className="thank">{done && "Thanks for contacting me!"}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact 