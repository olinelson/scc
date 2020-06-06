import React from 'react'

import { Icon } from 'semantic-ui-react'
import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'nuka-carousel'
import Img from 'gatsby-image'

export default function CarouselComponent () {
  const data = useStaticQuery(graphql`
   query {
  images: allImageSharp(filter: {
    fluid: {
      originalName: { regex: "/SCC/g"}
    }
  }) {
    nodes {
      id
      __typename
      fluid(fit: OUTSIDE) {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
  `)
  return (
    <Carousel
      heightMode='first'
      width='100%'
      style={{ margin: 'auto', maxWidth: '90vw' }}
      renderCenterLeftControls={({ previousSlide }) => (
        <Icon
          size='big'
          name='arrow alternate circle left outline'
          style={{ cursor: 'pointer' }}
          onClick={previousSlide}
          color='grey'
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Icon
          size='big'
          name='arrow alternate circle right outline'
          style={{ cursor: 'pointer' }}
          onClick={nextSlide}
          color='grey'
        />
      )}
    >
      {data.images.nodes.map(i => (
        <Img style={{ maxHeight: '100%', width: 'auto' }} key={i.id} fluid={i.fluid} />
      ))}
    </Carousel>
  )
}
