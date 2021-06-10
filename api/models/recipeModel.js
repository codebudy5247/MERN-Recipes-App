const mongoose = require('mongoose')


const recipeSchema = mongoose.Schema(
    {

        dish_name: {
            type: String,
            required: true,
        },
        list_of_ind: [{
            ind_name:{
                type: String,
                required: true,
               
              
            },
            ind_quantity:{
                type: Number,
                required: true,
             
            } ,
            ind_unit:{
                type: String,
                required: true,
             
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