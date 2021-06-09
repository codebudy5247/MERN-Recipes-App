const mongoose = require('mongoose')


const recipeSchema = mongoose.Schema(
    {

        dish_name: {
            type: String,
            required: true,
        },
        list_of_ingredients: [{
            ingredient_name: {
                type: String,



            },
            ingredient_quantity: {
                type: Number,


            },
            ingredient_unit: {
                type: String,


            }
        }],


        step_of_cook: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe