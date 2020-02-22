import React from 'react'
import { Link } from 'gatsby'
import { uuid } from 'uuidv4'

import './ResultsCard.scss'

const ResultsCard = (props) => {
    return (
        <div className='card-container'>
            <div className='info-container'>
                <h2>{props.name}</h2>
                <p><strong>Industry: </strong>{props.industry}</p>
                <p><strong>Description: </strong>{props.description}</p>
                <p><strong>Outcome: </strong>
                    {props.outcome.map(prop => <li key={uuid()}>{prop}</li>)}
                </p>
                <Link to={'/' + (props.url)}>Learn how we did it...</Link>
            </div>
        </div>
    )
}

export default ResultsCard