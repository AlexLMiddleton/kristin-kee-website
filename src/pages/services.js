import React from 'react'

import Layout from '../components/layout'
import ServicesOffered from '../components/Services/Services'
import OtherServicesList from '../components/OtherServices/OtherServicesList'

const Services = () => {
    return (
        <Layout>
            <ServicesOffered />
            <OtherServicesList />
        </Layout>
    )
}

export default Services