import React from 'react'
import { assets } from '../assets/assets'

const ClientCard2 = () => {
    return (
        <div className='clientCard'>
            <div className='clientCard-div'>
                <img src={assets.User} />
                <h3>Mrs. Adebayor, Lagos.</h3>
            </div>
            <p>“From the moment I walked in, I felt cared for. The doctors took the time to explain every step of my treatment, and the nurses were so kind. I couldn’t have asked for a better experience.”</p>
        </div>
    )
}

export default ClientCard2