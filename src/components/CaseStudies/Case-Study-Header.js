import React from 'react'

import './CaseStudy.scss'

const CaseStudyHeader = (props) => {
    return (
        <div className='case-study-header'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default CaseStudyHeader