import React, { useState } from 'react'
import { Form, Button, Message, Container } from 'semantic-ui-react'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const submitForm = ev => {
    ev.preventDefault()
    setButtonLoading(true)
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
        setButtonDisabled(true)
      } else {
        setStatus('error')
      }
      setButtonLoading(false)
    }
    xhr.send(data)
  }

  return (
    <Container text>
      <Form
        style={{ margin: 'auto auto' }}
        onSubmit={ev => submitForm(ev)}
        action="https://formspree.io/mlejevka"
        method="POST"
        error={status === 'ERROR'}
        success={status === 'SUCCESS'}
      >
        <h1>Contact</h1>
        <Form.Input
          required
          label="Full Name"
          name="name"
          placeholder="Wolfgang Amadeus Mozart"
        />
        <Form.Input
          required
          label="Email"
          name="email"
          type="email"
          placeholder="wolfy@gmail.com"
        />
        <Form.Input
          required
          label="Phone Number"
          name="phone"
          type="phone"
          placeholder="0400123123"
        />

        <Form.TextArea
          required
          name="message"
          label="Message"
          placeholder="Type your message here..."
        />
        <Button loading={buttonLoading} disabled={buttonDisabled} type="submit">
          Send
        </Button>
        <Message
          success
          header="Message Sent"
          content="Your email has been sent. Thankyou"
        />
        <Message
          error
          header="Action Forbidden"
          content="Something went wrong, please try again..."
        />
      </Form>
    </Container>
  )
}
