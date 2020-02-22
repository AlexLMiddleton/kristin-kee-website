import React from 'react'
import { Link } from 'gatsby'

import './ServiceCard.scss'

const ServiceCard = (props) => {
    return (
        <div className='service-container'>
            <div className='service-container-body'>
                <h3 className='service-container-header'>{props.title}</h3>
                <hr />
                <p className='service-container-pitch'>{props.pitch}</p>
            <ul className='service-container-item'>
                <li>{props.service1}</li>
                <li>{props.service2}</li>
                <li>{props.service3}</li>
                <li>{props.service4}</li>
                <li>{props.service5}</li>
                <li>{props.service6}</li>
            </ul>
            <div className='contact-link'>
                <Link to="/contact">Contact for pricing</Link>
            </div>
            </div>
        </div>
    )
}

export default ServiceCard