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

  const { pictureUrl, 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy} = req.body;

  await Recipe.create({
    pictureUrl: imgOnCloudinary, 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy
  });

  res.redirect('/recipes');
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

router.post('/recipes/:id/edit', async (req, res) => {
  const recipeId = await Recipe.findById(req.params,id);

  const { pictureUrl, 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy} = req.body;

  await Recipe.findByIdAndUpdate(recipeId, {
    pictureUrl, 
    name, 
    cuisine, 
    prepTime, 
    cookTime, 
    serves, 
    ingredients, 
    method, 
    suitable, 
    allergy
  });

  res.redirect('/recipes');
});

router.post('/recipes/:id/delete', async (req, res) => {
  const 
})


module.exports = router;