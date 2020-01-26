import React, { useEffect } from 'react'
import { Segment } from 'semantic-ui-react'

function Events() {
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
      <Segment style={{ background: '#372B35' }}>
        <a
          class="bit-widget-initializer"
          data-artist-name="Louis Cole"
          data-display-local-dates="false"
          data-display-past-dates="true"
          data-auto-style="false"
          data-text-color="#FFFFFF"
          //   data-link-color="#ffcc51"
          data-link-color="#EAAE00"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit="15"
          data-display-start-time="false"
          data-link-text-color="#FFFFFF"
          data-display-lineup="false"
          data-display-play-my-city="true"
          data-separator-color="rgba(124,124,124,0.25)"
        ></a>
      </Segment>
    </>
  )
}
export default Events
