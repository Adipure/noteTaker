const express = require('express')
const path = require ('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
//when we are getting a json, (urlencoded) helps to recieve complex json data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))

app.listen(3000)