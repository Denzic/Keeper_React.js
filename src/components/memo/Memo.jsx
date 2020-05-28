import React, { useState } from "react"
import InputArea from "./CreateArea"
import Note from "./Note"

const Memo = () => {
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
    <main>
      <InputArea updateNotes={updateNotes} />
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </main>
  )
}

export default Memo
