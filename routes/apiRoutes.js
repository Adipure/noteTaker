const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

//getting note
router.get('/api/notes', (req, res) => {
 fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  res.json(JSON.parse(data))
 })
})
// adding new note
router.post('/api/notes', (req, res) => {
 const addNote = req.body
 //give id to have unique value
 addNote.id = uuidv4()
 fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
  if (err) { console.log(err) }
  const addingNote = JSON.parse(data)
  addingNote.push(addNote)
  fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(addingNote), err => {
   if (err) { console.log(err) }
   res.sendStatus(200)
  })
 })
})
//delete note
//using : to make an unique ID for each values
router.delete('/api/notes/:id', (req, res) => {
 fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf-8', (err, data) => {
  const deleteNotes = JSON.parse(data)
  for (let i = 0; i < deleteNotes.length; i++) {
   const dbElement = deleteNotes[i];
   if (dbElement.id === req.params.id) {
    deleteNotes.splice(i, 1)
   }
  }
  fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(deleteNotes), err => {
   if (err) { console.log(err) }
   res.sendStatus(200)
  })
 })
})
module.exports = router
