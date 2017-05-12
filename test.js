import test from 'ava'
test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

var contentful = require('contentful')

var client = contentful.createClient({
  space: 'pa6kchr1mcxx',
  accessToken: 'b2a023ce0af8f50240dce5cdfd5f8a9ab298f93bcaf24c57a9ab98e5191845c0'
})

client.getEntry('4VHtP1ZQT6qQaQiayA0YCI')
.then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys)

  // console.log('entry status success...')
  // logs the field with ID title
  console.log(entry.fields.menuitem)
  console.log('menu success if its appear above')
})

test('menuTitle', t1 => {
  t1.pass()
})
