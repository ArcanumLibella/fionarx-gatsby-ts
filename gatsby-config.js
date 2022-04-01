module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `Fiona Roux | Portfolio`,
    siteUrl: `https://fionarx.gatsbyjs.io/`,
    description: `Portfolio of Fiona Roux, web developer based next to Paris`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-mdx",
  ],
};
