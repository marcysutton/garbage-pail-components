const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Garbage Pail Components`,
    description:
      `Let's turn up the "bad accessibility" dial up to 11 in order to feel the pain that users with disabilities experience on a regular basis.`,
    author: `@marcysutton`,
  },
  pathPrefix: "/garbage-pail-components",
  plugins: [
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        // disable gatsby-mdx plugin – use this when your site already uses gatsby-mdx
        mdx: true,
        // source directory for decks
        contentPath: `src/slides`,
        basePath: '/',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `garbage-pail-components`,
        short_name: `hotgarbage`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dumpster-fire-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}
