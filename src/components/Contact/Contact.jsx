import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';

import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0vvjf5', 'template_bey3vu7', form.current, '1Nd9aEHV0DUkQAcmS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
  };
    return (
        <div className="contact-form">
            <div className="contact-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message"  className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                </form>
            </div>
        </div>
    )
}

export default Contact 