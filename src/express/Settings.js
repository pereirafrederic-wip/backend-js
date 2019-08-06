const express = require('express')
const app = express()
const port = 3000

app.set('title', 'My Site')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app ${app.get('title')} listening on port ${port}!`))
