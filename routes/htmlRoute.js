const express = require('express')
const app = express()
const htmlRoutes = require('../routes/htmlRoute')
const router = require('express').Router()
var PORT = process.env.PORT || 3000

router.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, `../public/assets/index.html`))
})

app.get('/notes', (req, res) => {
 res.sendFile(__dirname, `../public/assets/notes.html`)
})

module.exports = router;