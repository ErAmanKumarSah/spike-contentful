const SpikeUtils = require('spike-util')
const Contentful = require('spike-contentful')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
// const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const locals = {}
module.exports = {
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: 'b2a023ce0af8f50240dce5cdfd5f8a9ab298f93bcaf24c57a9ab98e5191845c0',
      spaceId: 'pa6kchr1mcxx',
      contentTypes: [
        {
          name: 'menu',
          id: 'menu',
          transform: (post) => {
            // do your transformation here...
            return post
          },
          template: {
            path: 'views/index.sgr',
            output: (post) => {
              // console.log(post)
              return `index.html`
            }
          }
        },

        {
          name: 'home',
          id: 'home',
          transform: (post) => {
            // do your transformation here...
            return post
          },
          template: {
            path: 'views/index.sgr',
            output: (post) => {
              // console.log(post)
              return `index.html`
            }
          }
        }
      ]
    })
  ],
  devtool: 'source-map',
  vendor: 'assets/js/**',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/*.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals
  }),
  postcss: cssStandards(),
  // babel: jsStandards
}
