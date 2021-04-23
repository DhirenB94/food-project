const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe.model');
const fileUpload = require('../configs/cloudinary');


router.get('/recipes', async (req, res)=> {

  try {
    const recipesFromDB = await Recipe.find();
    res.render('recipes', {recipesFromDB});

  }catch(e) {
    res.render('error');
    console.log(`An error cocurred ${e}`);
  }
});

module.exports = router;