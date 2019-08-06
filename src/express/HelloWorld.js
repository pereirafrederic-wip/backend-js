const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.locals.title = 'My hello world'
//app.locals.strftime = require('strftime')
app.locals.email = 'pereira.frederic.developeur@gmail.com'
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
