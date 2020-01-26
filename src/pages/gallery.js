import React from 'react'

import { Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'

const Gallery = ({ location }) => (
  <Layout location={location}>
    <Container>
      <h1>Gallery</h1>
      <Carousel />
      <Divider hidden />
    </Container>
  </Layout>
)

export default Gallery
