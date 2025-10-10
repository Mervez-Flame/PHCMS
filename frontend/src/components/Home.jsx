import React from 'react';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const Home = () => {
    return (
        <div className='home'>
            <h3>Why Choose Us?</h3>
            <div className="grid-container">
                <Card className='item'/>
                <Card2 className='item'/>
                <Card3 className='item'/>
                <Card4 className='item'/>
            </div>
        </div>
    )
}

export default Home