const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get('/api/notes', (req, res) => {
 fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  res.json(JSON.parse(data))
 })
})

router.post('/api/notes', (req, res) => {
 const addNote = req.body
 fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  const addmoreNote = JSON.parse(data)
  addmoreNote.push(addNote)
  fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(addmoreNote), err => {
   if (err) { console.log(err) }
   res.sendStatus(200)
  })
 })
})

router.delete('/api/notes/:id', (req, res) => {
 const addNote = req.body
 
 const deleteNote = JSON.parse(data)
 fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(deleteNote), err => {
  if (err) { console.log(err) }
  res.sendStatus(200)
 })
})

module.exports = router
