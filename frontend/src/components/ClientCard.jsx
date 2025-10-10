import React from 'react';
import { assets } from '../assets/assets';

const ClientCard = () => {
    return (
        <div className='clientCard'> 
            <div className='clientCard-div'>
                <img src={assets.User}/>
                <h3>Chidubem O., Port Harcourt</h3>
            </div>
            <p>“The online appointment system was fast and easy to use. I didn’t have to wait long, and the staff were incredibly professional.”</p>
        </div>
    )
}

export default ClientCard