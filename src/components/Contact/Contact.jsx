import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="contact-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="contact-right">
                <form>
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