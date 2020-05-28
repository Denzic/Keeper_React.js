import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"

const Note = ({ note, deleteNote, value }) => {
  return (
    <div className='note'>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        onClick={() => {
          deleteNote(note.id)
        }}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note
