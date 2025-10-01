import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <img src={assets.logo} alt="PHCMS Logo" className='footer-logo' />
                <li className='footer-head'>Contact Us</li>
                <li>+234 807 749 7411</li>
                <li>ehizuahubmarketing@gmail.com</li>
                <li>6, Hon Fatai Eletu Street, Container Bustop, <br />Awoyaya, Lekki, Lagos</li>
            </div>
            <div className='footer-links'>
                <li className='footer-head'>Quick Links</li>
                <li>About Us</li>
                <li>Our Story</li>
                <li>Collection</li>
                <li>Custom Sites</li>
            </div>
            <div className='footer-links'>
                <li className='footer-head'>Customer Service</li>
                <li>FAQ</li>
                <li>Return and Exchange</li>
                <li>Shipping and Delivery</li>
                <li>Payment Option</li>
                <li>Terms and Conditions</li>
            </div>
            <div className='icons'>
                <li><img src={assets.face} alt="" /></li>
                <li><img src={assets.insta} alt="" /></li>
                <li><img src={assets.x} alt="" /></li>
                <li><img src={assets.Linkedin} alt="" /></li>
            </div>
        </footer>
    )
}

export default Footer