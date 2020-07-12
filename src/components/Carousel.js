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
        originalName
       ...GatsbyImageSharpFluid
      }
    }
  }
}
  `)

  const sortedImages = data.images.nodes.sort((a, b) => {
    return (
      parseInt(a.fluid.originalName.split('-')[1]) -
      parseInt(b.fluid.originalName.split('-')[1])
    )
    // const nameA = a.fluid.originalName.toUpperCase()
    // const nameB = b.fluid.originalName.toUpperCase()
    // console.log(nameA)
    // if (nameA < nameB) {
    //   return -1
    // }
    // if (nameA > nameB) {
    //   return 1
    // }
    // return 0
  })

  console.log(sortedImages)
  return (
    <Carousel
      heightMode='first'
      width='100%'
      style={{ margin: 'auto', maxWidth: 'min(100vw, 80rem)' }}
      pauseOnHover
      autoplay
      renderCenterLeftControls={({ previousSlide }) => (
        <Icon
          size='big'
          name='arrow alternate circle left outline'
          style={{ cursor: 'pointer' }}
          onClick={previousSlide}
          color='grey'
          inverted
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Icon
          size='big'
          name='arrow alternate circle right outline'
          style={{ cursor: 'pointer' }}
          onClick={nextSlide}
          color='grey'
          inverted
        />
      )}
    >
      {sortedImages.map(i => (
        <Img style={{ maxHeight: '100%', width: 'auto' }} key={i.id} fluid={i.fluid} />
      ))}
    </Carousel>
  )
}
