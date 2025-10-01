import React from 'react';
import { assets } from '../assets/assets.js'

const LandingPage = () => {
    return (
        <div className='Heading'>
            <div className='op'>
                <h1>Smarter Inventory <br /><span >Healthier</span> Hospitals</h1>
                <p>Streamline your hospital's supply chain with real-time tracking, automated stock alerts, and powerful analytics</p>
                <a href=""><button className='Acc'>Get Started</button></a>
            </div>
            <img src={assets.head} alt="Lady Holding Money" />
        </div>
    )
}

export default LandingPage