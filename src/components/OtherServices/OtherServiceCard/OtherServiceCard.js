import React from 'react'
import { Link } from 'gatsby'
import './OtherServiceCard.scss'

const OtherServiceCard = (props) => {
    return (
        <div className='other-service-container'>
            <div className='other-service-title-container'>
                <h3 className='other-service-title-header'>{props.title}</h3>
            </div>
            <div className='other-service-info-container'>
                <h3 className='other-service-info-header'>{props.title}</h3>
                <hr />
                <p className='other-service-info-paragraph'>{props.description}</p>
                <Link to='/contact'>Contact us to learn more...</Link>
            </div>
        </div>
    )
}

export default OtherServiceCard