import React, { useState, useEffect } from "react"
import Fab from "@material-ui/core/Fab"
import Dish from "./Dish"

const Menu = () => {
  const [meals, setMeals] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    getMeals()
  }, [])

  const updateInput = e => {
    const data = e.target.value
    setInput(data)
  }

  const getMeals = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese`
    )
    const meals = await data.json()
    setMeals(meals.meals)
  }

  return (
    <div>
      <h1>Menu</h1>
      <div className='menuSearch'>
        <input
          className='areaInput'
          onChange={updateInput}
          placeholder='Enter Food Area...'></input>
        <Fab onClick={getMeals}>Go</Fab>
      </div>
      <div className='dishes'>
        {meals.map(meal => (
          <Dish
            key={meal.idMeal}
            id={meal.idMeal}
            img={meal.strMealThumb}
            name={meal.strMeal}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
