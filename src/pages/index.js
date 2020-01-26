import React from 'react'

// components
import {
  Jumbotron,
  JumboMessage,
  JumboHeader,
} from '../components/styledComponents'
import Events from '../components/Events'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NewsPreview from '../components/NewsPreview'
import { Button, Container, Divider, Image, Segment } from 'semantic-ui-react'
import Layout from '../components/layout'

// images
import clarinetsImage from '../images/resources/clarinets.jpg'
import concert1Image from '../images/resources/concert1.jpg'
import concert2Image from '../images/resources/concert2.jpg'

function IndexPage() {
  return (
    <>
      <Layout>
        {/* <Segment
          basic
          fluid
          style={{
            backgroundImage: `url("${clarinetsImage}")`,
            minHeight: '50vh',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Sydney Clarinet Choir</h1>
        </Segment> */}

        <Jumbotron fullHeight src={clarinetsImage}>
          <JumboMessage>
            <JumboHeader size="huge" as={'h1'} inverted>
              Sydney Clarinet Choir
            </JumboHeader>
          </JumboMessage>
        </Jumbotron>

        <Divider hidden />

        <Container>
          <NewsPreview />

          <Divider hidden />

          <Jumbotron src={concert1Image}>
            <JumboMessage>
              <Button as={Link} to="/contact" size="massive">
                Play with SCC
              </Button>
            </JumboMessage>
          </Jumbotron>

          <Events />

          <Divider hidden />
          <Divider hidden />

          <Jumbotron src={concert2Image}>
            <JumboMessage>
              <Button as={Link} to="/contact" color="yellow" size="massive">
                Book SCC
              </Button>
            </JumboMessage>
          </Jumbotron>

          <Divider hidden />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
