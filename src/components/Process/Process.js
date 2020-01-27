import React from 'react'

import './Process.scss'

const Process = (props) => {
    return (
        <div className='process'>
            <h2>How it works...</h2>
            <div className='process-list'>
                <div className='about-item'>
                    <p><span className='step'>Step 1. </span>We discuss your business goals.</p>
                </div>
                <div className='about-item'>
                    <p><span className='step'>Step 2. </span>We perform a detailed social media audit.</p>
                </div>
                <div className='about-item'>
                    <p><span className='step'>Step 3. </span>We create a social media strategy tailored to your specific company and its goals.</p>
                </div>
                <div className='about-item'>
                    <p><span className='step'>Step 4. </span>We build a content calendar designed to maximize engagement and build a stronger brand.</p>
                </div>
                <div className='about-item'>
                    <p><span className='step'>Step 5. </span>We monitor the results and optimize the strategy based on performance.</p>
                </div>
                <div className='process-buttons'>
                    <div className='contact-us'>
                        <a href='/contact'>Contact Us and Start Growing</a>
                    </div>
                    <div className='other-services'>
                        <h3>Not what you need?  View our <a href='/services'><strong>other services.</strong></a></h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process