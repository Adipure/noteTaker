const express = require('express')
const router = require('express').Router()
const fs = require ('fs')


router.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, `../public/assets/index.html`))
})

router.get('/notes', (req, res) => {
 res.sendFile(__dirname, `../public/assets/notes.html`)
})

module.exports = router