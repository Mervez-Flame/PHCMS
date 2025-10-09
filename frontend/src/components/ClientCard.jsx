import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const ClientCard = () => {
    return (
        <div className='clientCard'> 
            <div className='clientCard-div'>
                <FaRegUserCircle size={40}/>
                <h3>Kate Love</h3>
            </div>
            <p>From Patients records to inventory and staff scheduling , everythingis organised and accessible in one place. Our efficiency has improved tremendously!</p>
        </div>
    )
}

export default ClientCard