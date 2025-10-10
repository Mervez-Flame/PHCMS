import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Home from './Home';
import BestValue from './BestValue';
import Contact from './Contact';
import Footer from './Footer';
import BestValue2 from './BestValue2';
import ClientSay from './ClientSay';


const Alt = () => {
    return (
        <div>
            <NavBar />
            <div className='body' >
                <LandingPage />
                <Home />
                <BestValue />
            </div>
            <BestValue2 />
            <div className="body">
                <ClientSay />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Alt