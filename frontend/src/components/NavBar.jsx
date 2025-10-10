import React from 'react';
import{ assets } from '../assets/assets'

const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt='Logo'  className='logo'/>
            <div className='navbar-div'>
                <a href="/login"><button className='sign-in'>Sign In</button></a>
                <a href="/register"><button className='Acc'>Open Account</button></a>
            </div>
        </div>
    )
}

export default NavBar