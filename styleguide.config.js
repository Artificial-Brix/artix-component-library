module.exports = {
  title: 'Styleguide',
  // components: 'src/components/**/*.{js}',
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
};
