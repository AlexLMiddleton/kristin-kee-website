import React from 'react'

import ResultsCard from './ResultsCard'

import './Results.scss'

const Results = (props) => {
    return (
        <div>
            <div className='results-header'>
                <h1>Results</h1>
            </div>
            <div class="flex-container">
                <div id="cardOne">
                    <ResultsCard name="Case Study #1" 
                        industry="Non-Profit" 
                        description="We helped a local non-profit with branding, telling their story, and establishing a strong social media presence." 
                        outcome={['Increased engagement rate by 923% in first month', 'Increased follower growth rate by 12% in first month', 'Increased follower growth rate by additional 10% in second month']}
                    />
                </div>
                <div id="cardTwo">
                    <ResultsCard name="Case Study #2" 
                        industry="Visual Arts" 
                        description="We helped a small business owner grow their social media following and engagement rate in order to increase their sales." 
                        outcome={['Increased engagement rate by 704% in first month', 'Increased follower growth rate by 21% in first month', 'Increased follower growth rate by additional 22% in second month']}
                    />
                </div>
            </div>

        </div>
    )
}

export default Results