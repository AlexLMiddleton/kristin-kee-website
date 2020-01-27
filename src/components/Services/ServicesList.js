import React from 'react'

import './ServicesList.scss'

const ServicesList = (props) => {
    return (
        <div>
            <h1>Additional Services Offered</h1>
            <div className='list-container'>
                <div className='list-one'>
                    <ul>
                        <li>
                            Branding
                        </li>
                        <li>
                            Logo Design
                        </li>
                        <li>
                            Graphic Design
                        </li>
                        <li>
                            Content Creation
                        </li>
                        <li>
                            Blogging
                        </li>
                        <li>
                            Newsletters
                        </li>
                    </ul>
                </div>
                <div className='list-two'>
                    <ul>
                        <li>
                            Photography and Editing
                        </li>
                        <li>
                            Videography and Editing
                        </li>
                        <li>
                            Video Creation
                        </li>
                        <li>
                            Social Media Auditing
                        </li>
                        <li>
                            Content Calendar Creation
                        </li>
                        <li>
                            Social Media Training
                        </li>   
                    </ul>
                </div>
            </div>
            <h4>For more information on custom services, <a href='/contact'>contact us.</a></h4>
        </div>
    )
}

export default ServicesList