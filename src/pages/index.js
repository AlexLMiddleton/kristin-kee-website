import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import "./mystyles.scss"

import Layout from "../components/layout"


const Homepage = (props) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulHomePage {
          edges {
            node {
              myMoneyMaker {
                fluid(maxWidth: 425) {
                  src
                }
              }
              myName
              myTitle
              digitalSolutions
              curatingCompanyCulture
              howAreTheyConnected
              servicesOffered
              digitalMarketingServices
              strategicOperationsServices
              contactMe
              placeHolder {
                fluid(maxWidth: 425) {
                  src
                }
              }
              servicesOfferedHeader {
                fluid(maxWidth: 920) {
                  src
                }
              }
              kristinKeeGraphic {
                fluid(maxWidth: 430) {
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

    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.file['en-US'].url
    //             return( 
    //             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    //                 <img alt={alt} src={url} />
    //             </div>)
    //         }
    //     }
    // }
    return (
        <Layout>
            <div>
                <div className="columns">
                    <div className="column is-half">
                        <img src={data.allContentfulHomePage.edges[0].node.myMoneyMaker.fluid.src} />
                        <img src={data.allContentfulHomePage.edges[0].node.placeHolder.fluid.src} />
                    </div>
                    <div className="column is-half" style={{overflow: 'scroll', height: 780}}>
                        <img src={data.allContentfulHomePage.edges[0].node.kristinKeeGraphic.fluid.src} />
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.myTitle}</h3>
                        {documentToReactComponents(data.contentfulHomePageDescriptionRichTextNode.json)}
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.digitalSolutions}</h3>
                        {documentToReactComponents(data.contentfulHomePageUniqueSolutionsDescriptionRichTextNode.json)}
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.curatingCompanyCulture}</h3>
                        {documentToReactComponents(data.contentfulHomePageCompanyCultureDescriptionRichTextNode.json)}
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.howAreTheyConnected}</h3>
                        {documentToReactComponents(data.contentfulHomePageConnectedDescriptionRichTextNode.json)}
                        <h2 className="title is-size-2">{data.allContentfulHomePage.edges[0].node.servicesOffered}</h2>
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.digitalMarketingServices}</h3>
                        {documentToReactComponents(data.contentfulHomePageDescriptionOfServicesOfferedRichTextNode.json)}
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.strategicOperationsServices}</h3>
                        {documentToReactComponents(data.contentfulHomePageDescriptionOfStrategicOperationsServicesRichTextNode.json)}
                        <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.contactMe}</h3>
                        {documentToReactComponents(data.contentfulHomePageContactMeInformationRichTextNode.json)}
                    </div>
                </div>
               <img src={data.allContentfulHomePage.edges[0].node.servicesOfferedHeader.fluid.src} />
               <div className="columns">
                <div className="column is-half box" style={{height: 430}}>
                    {documentToReactComponents(data.contentfulHomePageDescriptionOfServicesOfferedRichTextNode.json)}
                </div>
                <div className="column is-half box" style={{height: 430}}>
                    {documentToReactComponents(data.contentfulHomePageDescriptionOfStrategicOperationsServicesRichTextNode.json)}
                </div>
               </div>
            </div>
        </Layout>
    )
}

export default Homepage