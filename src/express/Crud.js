const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.delete('/', function (req, res) {
  console.log(req, res)
  res.send('DELETE request to homepage')
})

app.put('/', function (req, res) {
  console.log(req, res)
  res.send('PUT request to homepage')
})

app.post('/', function (req, res) {
  console.log(req, res)
  res.send('POST request to homepage')
})

app.get('/', function (req, res) {
  console.log(req, res)
  res.send('GET request to homepage')
})


app.route('/crud')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log(req, res, next)
  })
  .get(function (req, res, next) {
    console.log(req, res, next)
    res.json({})
    next()
  })
  .post(function (req, res, next) {
    // maybe add a new event...
    console.log(req, res, next)
    next()
  })
