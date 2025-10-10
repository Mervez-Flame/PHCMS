import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router'

const BestValue = () => {
    return (<>
        <div className='BV1'>
            <img src={assets.bestValue1} alt="Best Value" className='BV' />
            <div className='BVdiv'>
                <h1>Your Health, Our Priority</h1>
                <p>At PHCMS, we combine compassion with innovation to deliver trusted healthcare. From primary checkups to advanced diagnostics, we provide efficient, affordable, and reliable medical services — ensuring you get the right care, at the right time, every time.</p>
                <Link to=""><button className='Acc'>Book your appointment today!</button></Link>
            </div>
        </div>
        </>
    )
}

export default BestValue