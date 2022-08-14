// module.exports = {
//   plugins: [
//     // require("postcss-uncss"),
//     require("postcss-import"),
//   ],
// };

import PurgeCSS from 'purgecss'
const purgeCSSResults = await new PurgeCSS().purge({
  content: ['**/*.html'],
  css: ['**/*.css']
})

// module.exports = {
//   plugins: [
//     purgecss({
//       content: ["./src/**/*.js"],
//       // Treat every word in the bundle as a CSS selector
//       defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//     }),
//   ],
// };

// purgecss({
//   contentFunction: (sourceInputFileName: string) => {
//     if (/component\.scss$/.test(sourceInputFileName))
//       return [sourceInputFileName.replace(/scss$/, 'html')]
//     else
//       return ['/**/*.html']
//   },
// })