import React, { useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

const InputArea = ({ updateNotes }) => {
  const [isExpanded, setIsExpended] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const expand = () => {
    setIsExpended(true)
  }

  const saveNote = e => {
    const value = e.target.value
    const field = e.target.name

    setNote(prev => {
      return { ...prev, [field]: value }
    })
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            placeholder='Title'
            onChange={saveNote}
            name='title'
            value={note.title}
          />
        )}
        <textarea
          placeholder='Content'
          onClick={expand}
          onChange={saveNote}
          name='content'
          value={note.content}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab
            type='submit'
            onClick={e => {
              setNote({ title: "", content: "" })
              if (note.title !== "" && note.content !== "") {
                updateNotes(Math.random(), note, e)
              }
              e.preventDefault()
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default InputArea
