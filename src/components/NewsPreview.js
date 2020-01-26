import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import { Item } from 'semantic-ui-react'

export default function NewsPreview() {
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
            path,
          } = p.node.frontmatter

          let foundImage = data.allFile.edges.find(
            i => i.node.name === featureImage
          )

          return (
            <Item onClick={() => navigate(path)}>
              <Item.Image
                size="small"
                src={data.site.siteMetadata.siteURL + foundImage.node.publicURL}
              />

              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Meta>{date}</Item.Meta>
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
