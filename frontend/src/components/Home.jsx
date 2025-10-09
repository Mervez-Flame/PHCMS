import React from 'react';
import Card from './Card';

const Home = () => {
    return (
        <div className='home'>
            <h3>Why Choose Us?</h3>
            <div className="grid-container">
                <Card className='item'/>
                <Card className='item'/>
                <Card className='item'/>
                <Card className='item'/>
            </div>
        </div>
    )
}

export default Home