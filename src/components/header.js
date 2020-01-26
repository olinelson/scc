import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Menu, Sidebar, Icon, Responsive } from 'semantic-ui-react'

function Nav({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName="active" {...props}>
      {children}
    </Menu.Item>
  )
  const fullMenu = () => (
    <div style={{ margin: '0 auto 1rem auto', maxWidth: '100rem' }}>
      <Menu secondary pointing fluid onItemClick={() => setVisible(false)}>
        <LinkedItem to="/">{siteTitle}</LinkedItem>
        <Menu.Menu position="right">
          <LinkedItem to="/about">About</LinkedItem>
          <LinkedItem to="/contact">Contact</LinkedItem>
          <LinkedItem to="/gallery">Gallery</LinkedItem>
          <LinkedItem to="/recordings">Recordings</LinkedItem>
        </Menu.Menu>
      </Menu>
    </div>
  )

  const mobileMenu = () => (
    <Menu>
      <Sidebar
        as={Menu}
        direction="right"
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        onItemClick={() => setVisible(false)}
      >
        <Menu.Item onClick={() => setVisible(!visible)}>
          <Icon size="large" name="close" />
        </Menu.Item>

        <LinkedItem to="/">Home</LinkedItem>
        <LinkedItem to="/about">About</LinkedItem>
        <LinkedItem to="/contact">Contact</LinkedItem>
        <LinkedItem to="/gallery">Gallery</LinkedItem>
        <LinkedItem to="/recordings">Recordings</LinkedItem>
      </Sidebar>

      <Menu borderless fixed="top">
        <Menu.Menu position="left">
          <Menu.Item onClick={() => navigate('/')}>
            <h2>SCC</h2>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon size="large" name="bars" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Menu>
  )

  return (
    <>
      <Responsive as={'div'} {...Responsive.onlyMobile}>
        {mobileMenu()}
      </Responsive>
      <Responsive as={'div'} {...Responsive.onlyTablet}>
        {mobileMenu()}
      </Responsive>
      <Responsive as={'div'} {...Responsive.onlyComputer}>
        {fullMenu()}
      </Responsive>
    </>
  )
}

export default Nav
