const express =require('express')
const router = express.Router();
const { addRecipe, getRecipe,getRecipeById }=require('../controllers/RecipeController')

router.post("/",addRecipe);
router.get("/", getRecipe)
router.get("/:id", getRecipeById)

module.exports =router;