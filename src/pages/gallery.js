import React from 'react'

import { Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'

const Gallery = ({ location }) => (
  <Layout location={location}>
    <Divider hidden />
    <Container>
      <h1>Gallery</h1>
    </Container>
    <Divider hidden />
    <Carousel />
  </Layout>
)

export default Gallery
