const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//--------------------------------------------


const options ={
  caseSensitive : false,  -> “/Foo” and “/foo” ” seront 2 route différentes
  mergeParams: false,
  strict : false -> si true , “/foo” et “/foo/” seront 2 route différentes
}

var router = express.Router([options])
