import React from 'react'

import './ContactForm.scss'

const Contact = () => {
    return (
        <div className='form-container'>
            <h1>Contact Us</h1>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" data-netlify-honeypot="bot-field" />
                <div>
                    <label>Your Name
                        <br />
                        <input type="text" name="name" /></label>   
                </div>
                <div>
                    <label>Your Email
                        <br />
                        <input type="email" name="email" /></label>
                </div>
                <div>
                    <label>Your Website
                        <br />
                        <input type="text" name="website" /></label>
                </div>
                <div>
                    <label>Message
                        <br />
                        <textarea name="message"></textarea></label>
                </div>
                <div className='button-container'>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact