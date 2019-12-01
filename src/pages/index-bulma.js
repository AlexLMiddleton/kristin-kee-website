// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import "./mystyles.scss"

// import Layout from "../components/layout"

// const Homepage = (props) => {
//     const data = useStaticQuery(graphql`
//     query MyQuery {
//         allContentfulHomePage {
//           edges {
//             node {
//               myMoneyMaker {
//                 fluid(maxWidth: 425) {
//                   src
//                 }
//                 description
//               }
//               myName
//               myTitle
//               digitalSolutions
//               curatingCompanyCulture
//               howAreTheyConnected
//               strategicOperationsServices
//               contactMe
//               placeHolder {
//                 fluid(maxWidth: 425) {
//                   src
//                 }
//                 description
//               }
//               servicesOfferedHeader {
//                 fluid(maxWidth: 920) {
//                   src
//                 }
//                 description
//               }
//               kristinKeeGraphic {
//                 fluid(maxWidth: 425) {
//                   src
//                 }
//                 description
//               }
//               digitalServicesOfferedImage {
//                 description
//                 fluid(maxWidth: 425) {
//                   src
//                 }
//               }
//               initials {
//                 description
//                 fluid(maxWidth: 60) {
//                   src
//                 }
//               }
//               strategicServicesImage {
//                 description
//                 fluid(maxWidth: 425) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//         contentfulHomePageDescriptionRichTextNode {
//           json
//         }
//         contentfulHomePageUniqueSolutionsDescriptionRichTextNode {
//           json
//         }
//         contentfulHomePageCompanyCultureDescriptionRichTextNode {
//           json
//         }
//         contentfulHomePageConnectedDescriptionRichTextNode {
//           json
//         }
//         contentfulHomePageDescriptionOfServicesOfferedRichTextNode {
//           json
//         }
//         contentfulHomePageDescriptionOfStrategicOperationsServicesRichTextNode {
//           json
//         }
//         contentfulHomePageContactMeInformationRichTextNode {
//           json
//         }
//       }
      
//     `)
    
//     return (
//         <Layout>
//             <div>               
//                 <div className="columns">
//                     <div className="column is-half">
//                         <img alt={data.allContentfulHomePage.edges[0].node.myMoneyMaker.description} src={data.allContentfulHomePage.edges[0].node.myMoneyMaker.fluid.src} />
//                         <img className="is-hidden-mobile" alt={data.allContentfulHomePage.edges[0].node.placeHolder.description} src={data.allContentfulHomePage.edges[0].node.placeHolder.fluid.src} />
//                     </div>
//                     <div className="column is-half" style={{overflow: 'scroll', height: 780}}>
//                         <img alt={data.allContentfulHomePage.edges[0].node.kristinKeeGraphic.description} src={data.allContentfulHomePage.edges[0].node.kristinKeeGraphic.fluid.src} />
//                         <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.myTitle}</h3>
//                         {documentToReactComponents(data.contentfulHomePageDescriptionRichTextNode.json)}
//                         <br />
//                         <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.digitalSolutions}</h3>
//                         {documentToReactComponents(data.contentfulHomePageUniqueSolutionsDescriptionRichTextNode.json)}
//                         <br />
//                         <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.curatingCompanyCulture}</h3>
//                         {documentToReactComponents(data.contentfulHomePageCompanyCultureDescriptionRichTextNode.json)}
//                         <br />
//                         <h3 className="title is-size-3">{data.allContentfulHomePage.edges[0].node.howAreTheyConnected}</h3>
//                         {documentToReactComponents(data.contentfulHomePageConnectedDescriptionRichTextNode.json)}
//                     </div>
//                 </div>
//                <img alt={data.allContentfulHomePage.edges[0].node.servicesOfferedHeader.description} src={data.allContentfulHomePage.edges[0].node.servicesOfferedHeader.fluid.src} />
//                <div className="columns is-gapless">
//                 <div className="column is-half">
//                     <img alt={data.allContentfulHomePage.edges[0].node.digitalServicesOfferedImage.description} src={data.allContentfulHomePage.edges[0].node.digitalServicesOfferedImage.fluid.src} />
//                 </div>
//                 <div className="column is-half">
//                     <img alt={data.allContentfulHomePage.edges[0].node.strategicServicesImage.description} src={data.allContentfulHomePage.edges[0].node.strategicServicesImage.fluid.src} />
//                 </div>
//                </div>
//             </div>
//             <footer>
//                 <div>
//                     <h3 className="title is-size-3 has-text-centered is-inline-block">{data.allContentfulHomePage.edges[0].node.contactMe}</h3>
//                     <div className="has-text-centered">
//                         {documentToReactComponents(data.contentfulHomePageContactMeInformationRichTextNode.json)}
//                     </div>
//                 </div>
//             </footer>
//         </Layout>
//     )
// }

// export default Homepage