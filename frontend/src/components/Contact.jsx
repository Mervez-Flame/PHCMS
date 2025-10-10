import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-div'>
                <h1>Send Message</h1>
                <p>Need More Information? Contact Us.</p>
                <form action="" className='contact-grid-container'>
                    <input className='contact-item' type="text" placeholder='Your Name' required />
                    <input className='contact-item' type="email" placeholder='Email Address' required />
                    <input className='contact-item' type="text" placeholder='Phone Number' required />
                    <input className='contact-item' type="text" placeholder='Subject' required />
                    <div className="contact-text-area-container">
                        <textarea name="" id="" className='contact-textarea' placeholder='Message '></textarea>
                    </div>
                </form>
            </div>
            <img src={assets.contact} alt="" />
        </div>
    )
}

export default Contact