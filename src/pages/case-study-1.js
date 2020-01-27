import React from 'react'
import Layout from '../components/layout'
import CaseStudyOne from '../components/CaseStudies/Case-Study-1'
import CaseStudyHeader from '../components/CaseStudies/Case-Study-Header'

import './mystyles.scss'

const CaseStudy1 = () => {
    return (
        <Layout>
            <CaseStudyHeader title="Case Study 1 - Non-Profit" />
            <CaseStudyOne />
        </Layout>
    )
}

export default CaseStudy1