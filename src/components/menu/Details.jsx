import React, { useState, useEffect } from "react"

const Dish = ({ match }) => {
  const [details, setDetails] = useState({})
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    fetchDetails(getVideoId)
  }, [])

  const fetchDetails = async callback => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
      )
      const items = await data.json()
      callback(items.meals[0])
      setDetails(items.meals[0])
    } catch (e) {
      console.log(e)
    }
  }

  const getVideoId = items => {
    const vId = items.strYoutube.slice(32, items.strYoutube.length)
    setVideoId(vId)
  }

  return (
    <div className='container'>
      <div className='details'>
        <img src={details.strMealThumb} alt='img' />
        <div className='texts'>
          <h1>{details.strMeal}</h1>
          <p>{details.strInstructions}</p>
        </div>
      </div>
      <iframe
        title={details.idMeal}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'></iframe>
    </div>
  )
}

export default Dish
