import React from 'react';
import '../styles/Contact.css';
import mail1 from "../assets/mail1.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";

const Contact = () => {
    return (
        <div className="contact-page">
            <h4>Get In Touch</h4>
            <div className="title-div"></div>
            <div className="contact">
                <div className="contact-form">
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" />
                        </div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                            <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-div"></div>
                <div className="contact-details">
                    <h5>Let's Work <span style={{ color: '#0084FF' }}>Together</span></h5>
                    <p><img src={mail1} alt='img' /> mohanapriyan.m2006@gmail.com</p>
                    <p><img src={location} alt='img' /> Coimbatore, Tamil Nadu</p>
                    <p><img src={phone} alt='img' /> +91 9159604934</p>
                </div>
            </div>
        </div>
    )
}

export default Contact