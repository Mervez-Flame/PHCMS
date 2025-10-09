import React from 'react';
import { assets } from '../assets/assets';
// import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <img src={assets.logo} alt="PHCMS Logo" className='logo' />
                <li className='footer-head'>Contact Us</li>
                <li>+234 807 749 7411</li>
                <li>yourmail@gmail.com</li>
                <li>123 Main Street, Suite 456,Lagos.</li>
            </div>
            <div className='footer-links'>
                <li className='footer-head'>Quick Links</li>
                <li>About Us</li>
                <li>Our Story</li>
                <li>Collection</li>
                <li>Accessories</li>
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
                {/* <li><SiFacebook size={30}/></li> */}
                <li><AiFillInstagram size={30}/></li>
                <li><FaTwitter size={30}/></li>
                <li><BsLinkedin size={30}/></li>
            </div>
        </footer>
    )
}

export default Footer