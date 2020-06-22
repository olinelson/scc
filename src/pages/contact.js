import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ location }) => (
  <Layout location={location}>
    <ContactForm style={{ justifySelf: 'center', alignSelf: 'center' }} />
  </Layout>
)

export default Contact
