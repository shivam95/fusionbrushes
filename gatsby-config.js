module.exports = {
  siteMetadata: {
    title: 'FusionBrushes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_content/courses`,
        name: "courses",
      },
    },
    `gatsby-transformer-remark`
  ],
}