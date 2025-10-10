import React from 'react'
import { assets } from '../assets/assets'

const ClientCard3 = () => {
    return (
                <div className='clientCard'> 
            <div className='clientCard-div'>
                <img src={assets.User}/>
                <h3>Fatima S., Abuja.</h3>
            </div>
            <p>“I came for a routine check-up and was impressed by how thorough and attentive the doctors were. The environment is clean, calm, and welcoming.”</p>
        </div>
    )
}

export default ClientCard3