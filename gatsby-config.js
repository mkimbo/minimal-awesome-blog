const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/
const config = {
  dateFromFormat: 'YYYY-MM-DD',
  siteGATrackingID: 'UA-47311644-4',
}
module.exports = {
  siteMetadata: {
    title: `Awesome Blog`,
    siteUrl: `https://minimal-awesome-blog.netlify.app/`,
    description: `An awesome blog built with React`,
    author: `JackMkimbo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['FuturaLT, FuturaLT-Bold'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'blue',
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Blog`,
        short_name: `Awesome Blog`,
        description: `An awesome blog built with React`,
        start_url: `/`,
        background_color: `#110f8b`,
        theme_color: `#110f8b`,
        display: `standalone`,
        icons: [
          {
            src: '/logos/ab-logo-48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/logos/ab-logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/ab-logo-384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/logos/ab-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/logos/ab-logo-1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
