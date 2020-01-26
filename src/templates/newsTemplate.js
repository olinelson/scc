import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, Divider } from 'semantic-ui-react'
import { Jumbotron } from '../components/styledComponents'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let foundImage = data.allFile.edges.find(
    i => i.node.name === frontmatter.featureImage
  )

  return (
    <Layout>
      <Jumbotron
        src={data.site.siteMetadata.siteURL + foundImage.node.publicURL}
      />
      <Divider hidden />
      <Container text>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
        <Divider hidden />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featureImage
      }
    }
    allFile(filter: { absolutePath: { regex: "/(resources)/" } }) {
      edges {
        node {
          name
          extension
          dir
          modifiedTime
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`
