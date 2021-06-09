const Recipe = require('../models/recipeModel');


exports.addRecipe = async (req, res) => {

    try {
        const recipe = req.body;

        const newRecipe = new Recipe({
            ...recipe,
            createdAt: new Date().toISOString()
        })

        const data = await newRecipe.save();
        console.log(data);

        res.status(201).json(data);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
exports.getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.find().sort({ createdAt: -1 });

        res.status(200).json(recipe);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
