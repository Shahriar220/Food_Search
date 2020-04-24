import React from 'react'

function Ingredients(ingredients) {
    return ({
        ingredients.map(ingredient =>
            <
            li > { ingredient.text } < /li>
        )
    })
}
export default Ingredients;