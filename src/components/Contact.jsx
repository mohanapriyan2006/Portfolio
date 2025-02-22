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
                        <div className='input-div'>

                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>


                            <div className="input-box">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" />
                            </div>

                        </div>
                        <div className="input-box">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-div"></div>
                <div className="contact-details">
                    <h5>Let's Work <span style={{ color: '#0084FF' }}>Together</span></h5>
                    <div className='contact-detail-div'>
                        <div className="contact-img">

                            <img src={mail1} alt='img' />
                            <img src={location} alt='img' />
                            <img style={{ position: 'relative', left: '4%' }} src={phone} alt='img' />
                        </div>
                        <div className="contact-detail">

                            <p> mohanapriyan.m2006@gmail.com</p>
                            <p style={{ width: '150%' }}> Coimbatore, Tamil Nadu</p>
                            <p> +91 9159604934</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact