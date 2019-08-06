const express = require('express')


const app = express()
const port = 3000

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    debugger
    console.log('x-timestamp', Date.now())
    console.log(res, path, stat)
    res.set('x-timestamp', Date.now())
  }
}
app.locals.title = 'My static'
//app.locals.strftime = require('strftime')
app.locals.email = 'pereira.frederic.developeur@gmail.com'

app.get('/', (req, res) => res.send('static express!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public', options))
