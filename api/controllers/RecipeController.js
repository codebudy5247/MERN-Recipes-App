const Recipe = require('../models/recipeModel');

//Create A New Recipe
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

//Get All Recipes
exports.getRecipe = async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: "i",
      },
    }
    : {};
  const count = await Recipe.countDocuments({ ...keyword });
  try {
    const posts = await Recipe.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.status(200).json({ posts, page, pages: Math.ceil(count / pageSize) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
