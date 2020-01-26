import React from 'react'
import Layout from '../components/layout'
import { GridContainer } from '../components/styledComponents'

const NotFoundPage = () => (
  <Layout>
    <GridContainer text>
      <h2>
        <span role="img" aria-label="Forbidden sign">
          🚫
        </span>{' '}
        Not found
      </h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </GridContainer>
  </Layout>
)

export default NotFoundPage
