import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import { Item } from 'semantic-ui-react'
import Img from 'gatsby-image'
import moment from 'moment'

export default function NewsPreview () {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              preview
              featureImage
              path
            }
          }
        }
      }
      site {
        siteMetadata {
          siteURL
        }
      }
      images: allImageSharp {
        edges {
          node {
            fluid(fit: OUTSIDE) {
            originalName
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>News</h1>
      <Item.Group>
        {data.allMarkdownRemark.edges.map(p => {
          const {
            title,
            date,
            preview,
            featureImage,
            path
          } = p.node.frontmatter

          const previewImage = data.images.edges.find(e => e.node.fluid.originalName == featureImage)
          const prettyDate = moment(date).calendar()
          return (
            <Item key={path} onClick={() => navigate(path)}>
              <Item.Image style={{ minWidth: '20rem', maxWidth: '30rem', width: '100%', overflow: 'hidden' }}>
                <Img fluid={previewImage.node.fluid} />
              </Item.Image>
              <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Meta>{prettyDate}</Item.Meta>
                <Item.Description>{preview}</Item.Description>
                <Item.Extra as={Link} to={path}>
                  Read More.
                </Item.Extra>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    </>
  )
}
