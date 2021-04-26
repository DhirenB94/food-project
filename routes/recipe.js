const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe.model');
const fileUpload = require('../configs/cloudinary');

//main recipe
router.get('/recipes', async (req, res)=> {

  try {
    const recipesFromDB = await Recipe.find();
    res.render('recipes', {recipesFromDB});

  }catch(e) {
    res.render('error');
    console.log(`An error cocurred in router.get /recipes: ${e}`);
  }
});

//Create and post recipes
router.get('/recipes/create', async(req, res) => {
  res.render('recipes-create');
});

router.post('/recipes/create', fileUpload.single('image'), async (req, res) => {
 const imgOnCloudinary = req.file.path;
 try {
  const { 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy} = req.body;

    let ingredientsList = ingredients.split(",")
    let methodList = method.split(".")

  await Recipe.create({
    pictureUrl: imgOnCloudinary, 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients: ingredientsList, 
    method: methodList,
    suitable, 
    allergy
  });

  res.redirect('/recipes');

} catch(e) {
  console.log(e)
}
});

//Get individual recipe
router.get('/recipes/:id', async (req, res) => {

  const recipe = await Recipe.findById(req.params.id);

  res.render('recipe-details', {recipe});
});


//Edit and post individual recipe
router.get('/recipes/:id/edit', async (req, res) => {
  
  const recipe = await Recipe.findById(req.params.id);
  res.render('recipe-edit', {recipe});
});

router.post('/recipes/:id/edit', fileUpload.single('image'), async (req, res) => {
 // const imgOnCloudinary = req.file.path;
 console.log('body', req.body);
  const { 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy} = req.body;

    let ingredientsList = ingredients.split(",")
    let methodList = method.split(".")

  if (req.file) {
    await Recipe.findByIdAndUpdate(req.params.id,{
      name, 
      cuisine, 
      prepTime, 
      cookTime, 
      serves, 
      ingredients: ingredientsList, 
      method: methodList,
      suitable, 
      allergy,
      pictureUrl: req.file.path
    });
  } else  {
    await Recipe.findByIdAndUpdate(req.params.id,{
      name, 
      cuisine, 
      prepTime, 
      cookTime, 
      serves, 
      ingredients: ingredientsList, 
      method: methodList,
      suitable, 
      allergy
    });
  }
 

  res.redirect('/recipes');

});


//Delete recipe
router.post('/recipes/:id/delete', async (req, res) => {
  const recipeId = req.params.id;

  await Recipe.findByIdAndDelete(recipeId);

  res.redirect('/recipes');
});


//Post reviews
router.post('/reviews/:id/add', async (req, res) => {
  const recipeId = req.params.id;

  //Need user, comment names in hbs
  const { user, comment } = req.body;

  await Recipe.findByIdAndUpdate(recipeId, {
    $push: { review: { user, comment }}
  });

  res.redirect(`/recipes/${recipeId}`);
});


module.exports = router;