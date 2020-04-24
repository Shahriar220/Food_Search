import React from 'react'
import style from './recModule.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return ( < div className={style.recipe}  >
        <
        h1 className={style.recipe}> Title: { title } < /h1>
          <  div > {
            ingredients.map(ingredient => ( <
                li > { ingredient.text } < /li>
            ))
        } <
        /div> <
        p > Calories: { calories } < /p>    <
        img src = { image }
        alt = "recipe" / >
        <
        /div> 
    )
}
export default Recipe;