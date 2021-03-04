module.exports = {
  siteMetadata: {
    title: `Sakara`,
    fullTitle: `CONSTRUTORA SAKARA`,
    description: `Planeje melhor | Construa melhor | Viva melhor.`,
    about: `Desde nossa constituição em 2008, estamos construindo a nossa história como construtora em Brasília.`,
    email: `construtorasakaraltda@gmail.com`,
    social: {
      facebook: `https://facebook.com/construtorasakara`,
      instagram: `https://instagram.com/construtorasakara`
    },
    contact: {
      mobile: `+55 61 99828 2270`,
      telephone: `(61) 3047 8879`,
    },
    address: `Deck Norte, SHIN CA 01 Lt A, Sala 204 - Lago Norte, Brasília - DF, 71503-501`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.5711128985913!2d-47.88436468514596!3d-15.720898489096946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39c208b4bbb1%3A0x4b0a3724be925235!2sConstrutora%20Sakara!5e0!3m2!1spt-BR!2sbr!4v1607619216423!5m2!1spt-BR!2sbr`,
    opening: {
      day: `Segunda - Sexta`,
      hour: `8:00 - 17:00`,
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
      email: `mariodev@outlook.com.br`,
      contact: `(+55) 61 99275 7759`,
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
