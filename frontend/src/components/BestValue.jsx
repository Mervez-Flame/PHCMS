import React from 'react'
import { assets } from '../assets/assets'

const BestValue = () => {
    return (<>
        <div className='BV1'>
            <img src={assets.bestValue1} alt="Best Value" className='BV' />
            <div className='BVdiv'>
                <h1>Your Best Value Proposition</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio similique magnam deserunt, laudantium quisquam ad adipisci voluptas necessitatibus, tempore, iure ea reiciendis maxime aliquid fugit dignissimos distinctio iusto repellendus eum.</p>
                <a href=""><button className='Acc'>Get Started</button></a>
            </div>
        </div>
        </>
    )
}

export default BestValue