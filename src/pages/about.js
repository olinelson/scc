import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Container, Item } from 'semantic-ui-react'

const About = ({ location }) => (
  <Layout location={location}>
    <Container text>
      <h1>About</h1>
      <p>
        <span style={{ fontWeight: 'bold' }}>The Sydney Clarinet Choir</span>{' '}
        was founded by Peter Scaysbrook and Deborah de Graaff to provide
        experienced players with the opportunity to play chamber music. The
        members come from diverse backgrounds but have a common interest in the
        love of music and in the many tonal colours and abilities of the
        clarinet. Typically, our concert programmes offer a wide selection of
        genres and styles exactly showcasing those abilities. For future events
        contact us <Link to="/contact">here</Link> or email us directly at{' '}
        <a href="mailto:info@scc.net.au">info@scc.net.au</a>.
      </p>

      <Item.Group>
        <Item>
          <Item.Image
            size="medium"
            src="https://deborahdegraaff.com/images/headshot2.jpeg"
          />

          <Item.Content>
            <Item.Header as="a">Deborah de Graaff</Item.Header>
            <Item.Meta>Clarinet & musical director of SCC</Item.Meta>
            <Item.Description>
              Early in her career Deborah competed locally and internationally
              in London and Munich, winning numerous prizes, scholarships and
              awards, including national and Commonwealth ABC instrumental
              competitions in 1983.For over 30 years she has performed as a
              chamber musician most notably with her mother Lauris Elms, soprano
              Rita Hunter, pianists Geoffrey Parsons, John Winther and Len
              Vorster. As a concerto soloist she performed with Richard Bonynge
              and Paul Dyer Brandenburg. She also worked overseas with the Fine
              Arts Orchestra at St Martin in the Fields and in Vietnam. She
              regularly broadcasts for the ABC, has recorded over sixteen CDs,
              and collaborates in chamber recitals, often premiering especially
              written Australian compositions. Teaching at the Sydney
              Conservatorium of Music Tertiary, High School and Open Academy,
              she is a Research Affiliate also teaching Clarinet at UNSW and her
              private Sydney Town Hall studio. Awarded her PhD UNSW 2014
              (Practice Strategies of Elite Instrumental Musicians) she received
              a USYD Large Innovative Grant (2015) applying her PhD Model of
              Elite Practice (MEP) towards music student motivation at
              Conservatorium. Her 2016 publications include a Pitch Error Coding
              Protocol paper, co-authored with Emery Schubert, published in
              Music Perception (December 2016 issue). Her new CD titled Rags
              Bags and Tangos was available on her website from early 2018 and
              available to order in hard copy. Deborah is currently working on
              an on-line video and PDF clarinet ‘book’ designed for teachers of
              clarinet and advanced students wishing to gain the most out of
              their practice.
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            size="medium"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/600px-Placeholder_no_text.svg.png"
          />

          <Item.Content>
            <Item.Header as="a">Peter Dart</Item.Header>
            <Item.Meta>Associate musical director:</Item.Meta>
            <Item.Description>Short Bio .....</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>

      <h2>Choir Members</h2>
      <h4>Core Group</h4>
      <ul>
        <li>Deborah de Graaff (musical director)</li>
        <li>Peter Dart (associate musical director)</li>
        <li>Doug Farrington (treasurer)</li>
        <li>Ben Curry-Hyde</li>
        <li>Nicki Frampton</li>
        <li>Katie James</li>
        <li>Tanya Poyitt</li>
        <li>David Shannon (events manager)</li>
        <li>Peter Scaysbrook (co-founder and president)</li>
        <li>Kate Sweeny (secretary)</li>
        <li>Paul Williamson</li>
        <li>Zhu Xing Cao</li>
      </ul>

      <h4>Guest Artists</h4>
      <p>To be advised</p>
    </Container>
  </Layout>
)

export default About
