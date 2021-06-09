import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        <React.Fragment>

            <div className="recipes">

                <div className="recipe">


                    <img src={recipe.image_url} alt="recipe_img" />

                    <h5 className="toggle_label">Recipe name</h5>
                    <span>
                        <big >
                            {new Date(recipe.createdAt).toDateString()}
                        </big>
                    </span>
                </div>

            </div>
        </React.Fragment>


    )
}

export default RecipeCard
