const express = require('express')
const path = require ('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes/apiRoutes.js'))
app.get('/notes', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
//making a port to heroku
const port = process.env.PORT || 3000
app.listen(port)