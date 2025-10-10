import React from 'react'
import ClientCard from './ClientCard';
import ClientCard2 from './ClientCard2';
import ClientCard3 from './ClientCard3';

const ClientSay = () => {
    return (
        <div className='client'>
            <h1>What some of our Clients had to say</h1>
            <p>We offer the knowledege and abilities</p>
            <div className='client-div'>
                <ClientCard/>
                <ClientCard2/>
                <ClientCard3/>
            </div>
        </div>
    )
}

export default ClientSay