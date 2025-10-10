import React from 'react';
import{ assets } from '../assets/assets'
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt='Logo'  className='logo'/>
            <div className='navbar-div'>
                <Link to="/login"><button className='sign-in'>Sign In</button></Link>
                <Link to="/register"><button className='Acc'>Open Account</button></Link>
            </div>
        </div>
    )
}

export default NavBar