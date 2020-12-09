module.exports = {
  siteMetadata: {
    title: `ConstrWEB`,
    fullTitle: `TANPEL CONSTRUCTION`,
    description: `Listen better | Plan better | Build better.`,
    about: `Since our incorporation in 1981, we've grown from a regional organization to a multi-faceted, national presence in the industry with headquarters in New York.`,
    email: `info@tanpelconstruction.com`,
    social: {
      facebook: `https://facebook.com/tanpelconstruction`,
      twitter: `https://twitter.com/tanpelconstruction`,
      instagram: `https://instagram.com/tanpelconstruction`,
      linkedin: `https://linkedin.com/in/tanpelconstruction`,
    },
    contact: {
      mobile: `(+63) 912 345 6789`,
      telephone: `(02) 123 4567`,
    },
    address: `Bermuda Subd., Pamplona 3, Las Pinas City, Philippines, 1740`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.590531801578!2d120.92931831483857!3d14.450745589898093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d282c1782f4f%3A0x62e247641b50bd21!2sBermuda%20Country%20Subdivision%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1566970336076!5m2!1sen!2sph`,
    opening: {
      day: `Segunda - Sexta`,
      hour: `9:00 - 18:00`,
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities provide employees with the ability to
      work on projects of all sizes and types and receive amazing
      benefits in return. They include but are in no way limited to:`,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        `Employee development programs`,
      ],
    },

    author: {
      name: `Arismário Neves`,
      position: `Web Developer`,
      //email: `mariodev@outlook.com.br`,
      //contact: `(+55) 61 99275 7759`,
      website: `http://arismarioneves.tk`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brand-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
