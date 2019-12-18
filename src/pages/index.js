import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/Navbar'
import Signature from '../components/Hero/Signature'
import Process from '../components/Process/Process'



const Index = (props) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulHomePage {
          edges {
            node {
              myMoneyMaker {
                fluid(maxWidth: 425) {
                  src
                }
                description
              }
              myName
              myTitle
              digitalSolutions
              curatingCompanyCulture
              howAreTheyConnected
              strategicOperationsServices
              contactMe
              placeHolder {
                fluid(maxWidth: 425) {
                  src
                }
                description
              }
              servicesOfferedHeader {
                fluid(maxWidth: 920) {
                  src
                }
                description
              }
              kristinKeeGraphic {
                fluid(maxWidth: 425) {
                  src
                }
                description
              }
              digitalServicesOfferedImage {
                description
                fluid(maxWidth: 425) {
                  src
                }
              }
              initials {
                description
                fluid(maxWidth: 60) {
                  src
                }
              }
              strategicServicesImage {
                description
                fluid(maxWidth: 425) {
                  src
                }
              }
            }
          }
        }
        contentfulHomePageDescriptionRichTextNode {
          json
        }
        contentfulHomePageUniqueSolutionsDescriptionRichTextNode {
          json
        }
        contentfulHomePageCompanyCultureDescriptionRichTextNode {
          json
        }
        contentfulHomePageConnectedDescriptionRichTextNode {
          json
        }
        contentfulHomePageDescriptionOfServicesOfferedRichTextNode {
          json
        }
        contentfulHomePageDescriptionOfStrategicOperationsServicesRichTextNode {
          json
        }
        contentfulHomePageContactMeInformationRichTextNode {
          json
        }
      }
      
    `)
    
    return (
      // <Layout>
      //   <div className='container'>
      //       <Navbar />
      //       <div className='hero-container'>
      //           <Signature />
      //           <h3>Strategic Social Media Marketing</h3>
      //       </div>
      //       <Process />
      //   </div>
      // </Layout>
      <div>
        <h1 style={{textAlign: 'center', marginTop: '50vh'}}>Under construction.  Check back soon!</h1>
      </div>
    )
}

export default Index