import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, Divider } from 'semantic-ui-react'
import Img from 'gatsby-image'
import moment from 'moment'

function Template ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, featureImageQuery } = data
  const { frontmatter, html } = markdownRemark
  const prettyDate = moment(frontmatter.date).calendar()
  return (
    <Layout>
      <Img
        style={{ maxHeight: '40vh' }}
        fluid={featureImageQuery.nodes[0].fluid}
      />
      <Divider hidden />
      <Container text>
        <h1>{frontmatter.title}</h1>
        <small>{prettyDate}</small>
        <Divider hidden />
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Divider hidden />
        <Divider hidden />
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!, $featureImage: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featureImage
      }
    }
    site {
      siteMetadata {
        siteURL
      }
    }
  featureImageQuery: allImageSharp(filter: {fluid: {originalName: {eq: $featureImage }}}) {
    nodes {
      id
      __typename
      fluid(fit: OUTSIDE) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`
export default Template
