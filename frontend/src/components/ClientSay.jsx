import React from 'react'
import ClientCard from './ClientCard';

const ClientSay = () => {
    return (
        <div className='client'>
            <h1>What some of our Clients had to say</h1>
            <p>We offer the knowledege and abilities</p>
            <div className='client-div'>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
            </div>
        </div>
    )
}

export default ClientSay