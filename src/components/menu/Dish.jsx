import React from "react"
import { Link } from "react-router-dom"

const Dish = ({ id, img, name }) => {
  return (
    <Link to={`/menu/${id}`}>
      <div className='dish'>
        <img src={img} alt='img' />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default Dish
