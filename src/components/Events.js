import React, { useEffect } from 'react'
import { Segment } from 'semantic-ui-react'

function Events () {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://widget.bandsintown.com/main.min.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <h1>Events</h1>
      <Segment>
        <p>All performances and concerts have been cancelled or postponed indefinitely due to the Covid-19 pandemic. Once the social distancing restrictions have been lifted, and when it is safe for gatherings to take place, Sydney Clarinet Choir will post details of upcoming performances. In the meantime, watch this space for news of our remote recordings during lockdown.</p>
      </Segment>
    </>
  )

  // return (
  //   <>
  //     <h1>Events</h1>
  //     <Segment style={{ background: '#372B35' }}>
  //       <a
  //         class='bit-widget-initializer'
  //         data-artist-name='Louis Cole'
  //         data-display-local-dates='false'
  //         data-display-past-dates='true'
  //         data-auto-style='false'
  //         data-text-color='#FFFFFF'
  //         //   data-link-color="#ffcc51"
  //         data-link-color='#EAAE00'
  //         data-background-color='rgba(0,0,0,0)'
  //         data-display-limit='15'
  //         data-display-start-time='false'
  //         data-link-text-color='#FFFFFF'
  //         data-display-lineup='false'
  //         data-display-play-my-city='true'
  //         data-separator-color='rgba(124,124,124,0.25)'
  //       />
  //     </Segment>
  //   </>
  // )
}
export default Events
