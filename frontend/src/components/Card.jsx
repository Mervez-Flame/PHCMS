import React from 'react';
import { assets } from '../assets/assets';

const Card = () => {
    return (
        <div className='card'>
            <img src={assets.cardInfo} alt="alt" />
            <div className='card-div'>
                <h3 className='card-h3'>A better way</h3>
                <p className='card-p'>BetaFunds allow its users to create a  better saving plan that is easier to follow through with a wonderful experience.</p>
            </div>
        </div>
    )
}

export default Card