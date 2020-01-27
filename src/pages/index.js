import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/Navbar'
import Signature from '../components/Hero/Signature'
import Process from '../components/Process/Process'
import Results from '../components/Results/Results'



const Index = (props) => {    
    return (
      <Layout>
        <div className='container'>
            <Navbar />
            <div className='hero-container'>
                { typeof window !== `undefined` ? <Signature /> : null }
                <h3>Strategic Social Media Marketing</h3>
            </div>
            <Process />
            <Results />
        </div>
      </Layout>
    )
}

export default Index