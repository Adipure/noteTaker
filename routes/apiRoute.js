const router = require('express').Router()
const path = require('path')
const fs = require('fs')

//getting note
router.get('/api/notes', (req, res) => {
 fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  res.json(JSON.parse(data))
 })
})
// adding new note
router.post('/api/notes', (req, res) => {
 const addNote = req.body
 fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  const addingNote = JSON.parse(data)
  addingNote.push(addNote)
  fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(addingNote), err => {
   if (err) { console.log(err) }
   res.sendStatus(200)
  })
 })
})
//delete note
router.delete('/api/notes/:id', (req, res) => {
 const addNote = req.body
 console.log = (req.body)
 const deleteNote = JSON.parse(data)
 fs.writeFile(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(deleteNote), err => {
  if (err) { console.log(err) }
  res.sendStatus(200)
 })
})

module.exports = router
