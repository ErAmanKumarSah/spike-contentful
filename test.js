import test from 'ava'
import sinon from 'sinon'

var scriptjs = require('./src/script')

test('Addition function ', async t => {
  const promiseResolution = new Promise(resolve => resolve(scriptjs.sumT(2, 6)))
  t.is(await promiseResolution, scriptjs.sumT(5, 3))
})

// contentful check on console
var contentful = require('contentful')
var client = contentful.createClient({
  space: 'pa6kchr1mcxx',
  accessToken: 'b2a023ce0af8f50240dce5cdfd5f8a9ab298f93bcaf24c57a9ab98e5191845c0'
})

client.getEntry('4VHtP1ZQT6qQaQiayA0YCI')
.then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys)

  console.log('entry status success...')
  // logs the field with ID title
  console.log(entry.fields.menuitem)
  console.log('menu success if its appear above')
})
