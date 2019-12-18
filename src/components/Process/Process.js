import React from 'react'

import './Process.scss'

const Process = (props) => {
    return (
        <div className='process'>
            <h2>Here's how it works...</h2>
            <div className='process-list'>
                <div className='about-item'>
                    <p><span>Step 1. </span>We perform a detailed social media audit.</p>
                </div>
                <div className='about-item'>
                    <p><span>Step 2. </span>We create a social media strategy tailored to your specific company.</p>
                </div>
                <div className='about-item'>
                    <p><span>Step 3. </span>We build a content calendar designed to maximize engagement and build a stronger brand.</p>
                </div>
                <div className='about-item'>
                    <p><span>Step 4. </span>We monitor the results and optimize the strategy based on performance.</p>
                </div>
            </div>
        </div>
    )
}

export default Process