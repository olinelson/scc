const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Sydney Clarinet Choir',
    siteURL: 'https://sydneyclarinetchoir.com'
    // siteURL: 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src')
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
