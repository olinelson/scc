import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Container, Icon, Divider, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Header from './header'

import { SiteContainer } from '../components/styledComponents'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteURL
          }
        }
      }
    `}
    render={(data) => (
      <SiteContainer>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={
            [
              {
                name: 'description',
                content: 'The Sydney Clarinet Choir was founded by Peter Scaysbrook and Deborah de Graaff to provide experienced players with the opportunity to play chamber music. The members come from diverse backgrounds but have a common interest in the love of music and in the many tonal colours and abilities of the clarinet. Typically, our concert programmes offer a wide selection of genres and styles exactly showcasing those abilities'
              }
            ]
          }
        />
        <div style={{ gridArea: 'main' }}>
          <Header siteTitle={data.site.siteMetadata.title} />

          <div style={{ margin: '0 auto', maxWidth: '100rem' }}>{children}</div>
        </div>

        {/* <Divider style={{ gridArea: 'space' }} hidden /> */}

        <div style={{ gridArea: 'footer' }}>
          <Container textAlign='center'>
            <h4>Sydney Clarinet Choir</h4>

            <List horizontal inverted={false} divided link size='small'>
              <List.Item as={Link} to='/'>
                Home
              </List.Item>
              <List.Item as={Link} to='/about'>
                About
              </List.Item>
              <List.Item as={Link} to='/contact'>
                Contact
              </List.Item>
              <List.Item as={Link} to='/gallery'>
                Gallery
              </List.Item>
              <List.Item as={Link} to='/recordings'>
                Recordings
              </List.Item>
            </List>
            <Divider hidden />
            <small style={{ color: 'grey' }}>
              <Icon name='copyright' />
              {new Date().getFullYear()}
            </small>
            <Divider hidden />
          </Container>
        </div>
      </SiteContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
