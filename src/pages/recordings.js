import React from 'react'

import { Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'

const Recordings = ({ location }) => (
  <Layout location={location}>
    <Divider hidden />
    <Container>
      <h1>Recordings</h1>
      <p>coming soon...</p>
    </Container>
  </Layout>
)

export default Recordings
