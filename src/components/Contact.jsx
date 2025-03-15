import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import mail1 from "../assets/mail1.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import Swal from "sweetalert2";

const Contact = () => {

    const form = useRef();
    const [isDisabled, setDisabled] = useState(false);

    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;




    const showAlert = () => {
        Swal.fire({
            title: "Success!",
            text: "Your Message was successfully send!",
            icon: "success",
            confirmButtonText: "OK",
        });
    };




    const sendMail = (e) => {
        e.preventDefault();
        setDisabled(true)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
            () => {
                showAlert();
                setDisabled(false);
            }
        ).catch((error) => {
            alert('Failed...❗', error);
            setDisabled(false);
        }
        )


    }

    return (
        <div className="contact-page">
            <h4>Get In Touch</h4>
            <div className="title-div"></div>
            <div className="contact">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendMail}>
                        <div className='input-div'>

                            <div className="input-box">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="contact_name" id="name" required />
                            </div>

                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="contact_email" id="email" required />
                            </div>



                        </div>
                        <div className="input-box">
                            <label htmlFor="message">Message</label>
                            <textarea name="contact_message" id="message" required></textarea>
                        </div>

                        <button type="submit" className={isDisabled? "disabled-btn": ""} disabled={isDisabled}>{isDisabled? "Sending...":"Send"}</button>
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