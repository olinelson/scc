import React from 'react'

import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'nuka-carousel'
import { CarouselImage } from '../components/styledComponents'

export default function CarouselComponent() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/(carousel)/" } }) {
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

  const siteURL = data.site.siteMetadata.siteURL

  const images = data.allFile.edges

  return (
    <Carousel
      heightMode="first"
      width="100%"
      style={{ margin: 'auto', maxWidth: '90vw' }}
      renderCenterLeftControls={({ previousSlide }) => (
        <Icon
          size="big"
          name="arrow alternate circle left outline"
          style={{ cursor: 'pointer' }}
          onClick={previousSlide}
          color="grey"
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Icon
          size="big"
          name="arrow alternate circle right outline"
          style={{ cursor: 'pointer' }}
          onClick={nextSlide}
          color="grey"
        />
      )}
    >
      {images.map(i => (
        <CarouselImage src={siteURL + i.node.publicURL} />
      ))}
    </Carousel>
  )
}
