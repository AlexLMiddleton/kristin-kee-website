import React from 'react'
import ServicePlans from './ServicePlans'

import ServiceCard from './ServiceCard/ServiceCard'
import './Services.scss'

const ServicesOffered = () => {
    return (
        <div className='services-offered-container'>
            <h2 className='services-offered-header'>Service Plans</h2>
            <div className='services-offered-plan'>
                {ServicePlans.map(service => <ServiceCard title={service.title} pitch={service.pitch} service1={service.service1} service2={service.service2} service3={service.service3} service4={service.service4} service5={service.service5} service6={service.service6} /> )}
            </div>
            {/* <h4 className='view-other-services'>Don't see what you're looking for?  Check out our <Link to='/other-services'>Other Services</Link> page.</h4> */}
        </div>

    )
}

export default ServicesOffered