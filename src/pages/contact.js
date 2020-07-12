import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ location }) => (
  <Layout location={location}>
    <Divider hidden />
    <ContactForm style={{ justifySelf: 'center', alignSelf: 'center' }} />
    <Divider hidden />
  </Layout>
)

export default Contact
