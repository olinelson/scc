import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container, Icon, Divider, List } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import Header from "./header"

import { SiteContainer, MobileOnlyDiv } from "../components/styledComponents"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//             siteURL
//           }
//         }
//       }
//     `}
//     render={data => (
//       <SiteContainer>
//         <div>
//           <Helmet
//             title={data.site.siteMetadata.title}
//             meta={[
//               { name: 'description', content: 'Sample' },
//               { name: 'keywords', content: 'sample, something' },
//             ]}
//           />

//           <Header siteTitle={data.site.siteMetadata.title} />

//           <MobileOnlyDiv>
//             <Divider hidden />
//           </MobileOnlyDiv>

//           <div style={{ margin: '0 auto', maxWidth: '100rem' }}>{children}</div>
//         </div>

//         <Divider hidden />

//         <Divider hidden />
//         <div>
//           <Container textAlign="center">
//             {/* <Image centered size="tiny" src="logos/logo.png" /> */}
//             <h4>Sydney Clarinet Choir</h4>

//             <List horizontal inverted={false} divided link size="small">
//               <List.Item as={Link} to="/">
//                 Home
//               </List.Item>
//               <List.Item as={Link} to="/about">
//                 About
//               </List.Item>
//               <List.Item as={Link} to="/contact">
//                 Contact
//               </List.Item>
//               <List.Item as={Link} to="/gallery">
//                 Gallery
//               </List.Item>
//               <List.Item as={Link} to="/recordings">
//                 Recordings
//               </List.Item>
//             </List>
//             <Divider hidden />
//             <small style={{ color: 'grey' }}>
//               <Icon name="copyright" />
//               {new Date().getFullYear()}
//             </small>
//             <Divider hidden />
//           </Container>
//         </div>
//       </SiteContainer>
//     )}
//   />
// )

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />

        <Header siteTitle={data.site.siteMetadata.title} />

        <SiteContainer>
          <div
            style={{ margin: "0 auto", maxWidth: "100rem", gridArea: "main" }}
          >
            {children}
          </div>

          <Divider style={{ gridArea: "space" }} hidden />

          <div style={{ gridArea: "footer" }}>
            <Divider hidden />
            <Divider />
            <Divider hidden />
            <Container textAlign="center">
              {/* <Image centered size="tiny" src="logos/logo.png" /> */}
              <h4>Sydney Clarinet Choir</h4>

              <List horizontal inverted={false} divided link size="small">
                <List.Item as={Link} to="/">
                  Home
                </List.Item>
                <List.Item as={Link} to="/about">
                  About
                </List.Item>
                <List.Item as={Link} to="/contact">
                  Contact
                </List.Item>
                <List.Item as={Link} to="/gallery">
                  Gallery
                </List.Item>
                <List.Item as={Link} to="/recordings">
                  Recordings
                </List.Item>
              </List>
              <Divider hidden />
              <small style={{ color: "grey" }}>
                <Icon name="copyright" />
                {new Date().getFullYear()}
              </small>
              <Divider hidden />
            </Container>
          </div>
        </SiteContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
