const express =require('express')
const router = express.Router();
const { addRecipe, getRecipe }=require('../controllers/RecipeController')

router.post("/",addRecipe);
router.get("/", getRecipe)

module.exports =router;