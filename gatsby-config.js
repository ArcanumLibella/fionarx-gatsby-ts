module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/assets/icons/`, // See below to configure properly
        },
      },
    },
  ],
};
