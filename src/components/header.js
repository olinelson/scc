import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Menu, Sidebar, Icon } from 'semantic-ui-react'
import { MobileOnlyDiv, DesktopOnlyDiv } from '../components/styledComponents'

function Nav ({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName='active' {...props}>
      {children}
    </Menu.Item>
  )
  const fullMenu = () => (
    <DesktopOnlyDiv style={{ margin: '0 auto 1rem auto', maxWidth: '100rem' }}>
      <Menu secondary pointing fluid onItemClick={() => setVisible(false)}>
        <LinkedItem to='/'>{siteTitle}</LinkedItem>
        <Menu.Menu position='right'>
          <LinkedItem to='/about'>About</LinkedItem>
          <LinkedItem to='/contact'>Contact</LinkedItem>
          <LinkedItem to='/gallery'>Gallery</LinkedItem>
          <LinkedItem to='/recordings'>Recordings</LinkedItem>
        </Menu.Menu>
      </Menu>
    </DesktopOnlyDiv>
  )

  const mobileMenu = () => (
    <MobileOnlyDiv>
      <Menu>
        <Sidebar
          as={Menu}
          direction='right'
          animation='overlay'
          icon='labeled'
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='thin'
          onItemClick={() => setVisible(false)}
        >
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon size='large' name='close' />
          </Menu.Item>

          <LinkedItem to='/'>Home</LinkedItem>
          <LinkedItem to='/about'>About</LinkedItem>
          <LinkedItem to='/contact'>Contact</LinkedItem>
          <LinkedItem to='/gallery'>Gallery</LinkedItem>
          <LinkedItem to='/recordings'>Recordings</LinkedItem>
        </Sidebar>

        <Menu borderless fixed='top'>
          <Menu.Menu position='left'>
            <Menu.Item onClick={() => navigate('/')}>
              <h2>SCC</h2>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item onClick={() => setVisible(!visible)}>
              <Icon size='large' name='bars' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Menu>
    </MobileOnlyDiv>
  )

  return (
    <>
      {mobileMenu()}
      {fullMenu()}
    </>
  )
}

export default Nav
