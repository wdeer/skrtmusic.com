module.exports = (ctx) => ({
  plugins: {
    'postcss-font-magician': {
         protocol: 'https:'
    },
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
          customProperties: {
              warnings: false
          }
      }
    },
    'autoprefixer': {},
    'postcss-flexbugs-fixes': {},
    'postcss-nested': {},
    'postcss-preset-env': {}
  }
})






// const uncssConfig = {
//   html: [
//     'http://localhost:4567/index.html'
//   ]
// };
//
// // ...
//
// module.exports = ({ file, options }) => {
//   return {
//     parser: 'postcss-safe-parser',
//     plugins: {
//       'postcss-uncss': uncssConfig,
//       'postcss-font-magician': {
//            protocol: 'https:'
//       },
//       // 'oldie': {},
//       // 'postcss-font-awesome': {},
//       // 'postcss-csso': {},
//       'postcss-import': {},
//       'postcss-cssnext': {},
//       'autoprefixer': {},
//       'postcss-flexbugs-fixes': {},
//       'postcss-nested': {}
//     },
//   };
// };
