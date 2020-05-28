import React from "react"
import { Link } from "react-router-dom"
import HighlightIcon from "@material-ui/icons/Highlight"

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <ul>
        <Link to='/'>
          <li>Memo</li>
        </Link>
        <Link to='/menu'>
          <li>Menu</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
