import React from 'react'
import { Link } from 'gatsby'
import './OtherServicesList.scss'
import OtherServiceCard from './OtherServiceCard/OtherServiceCard'
import OtherServices from './OtherServiceObject'

const OtherServicesList = () => {
    return (
        <div className='services-main'>
            <div className='services-container'>
                <h2 className='services-header'>Additional Services Offered</h2>
                <div className='list-container'>
                    {OtherServices.map(service => <OtherServiceCard title={service.title} description={service.description} /> )}
                </div>
                <h4>For more information on custom services, <Link to='/contact'>contact us.</Link></h4>
            </div>
        </div>
    )
}

export default OtherServicesList