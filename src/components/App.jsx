import React, { useState } from "react"
import InputArea from "./CreateArea"
import Note from "./Note"
import Footer from "./Footer"
import Header from "./Header"

const App = () => {
  const [notes, setNotes] = useState([])

  const updateNotes = (newId, note, e) => {
    note.id = newId
    setNotes(prev => {
      return [...prev, note]
    })
  }

  const deleteNote = currentId => {
    setNotes(prev => {
      return prev.filter(note => {
        return note.id !== currentId
      })
    })
  }

  return (
    <div>
      <Header />
      <InputArea updateNotes={updateNotes} />
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
      <Footer />
    </div>
  )
}

export default App
