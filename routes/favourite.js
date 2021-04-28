const express = require('express');
const router = express.Router();
const Favourite = require('../models/Favourite.model');

//Render favourite page
router.get('/recipes/favourite', async (req, res)=> {
  const user = req.session.currentUser._id;

  const favourites = await Favourite.find({user: user}).populate('recipe');//favourite.model -> 2 items: recipe and user

  res.render('recipes/favourite', { user, favourites }); 
});


//Add favourite
router.post('/recipes/:id/favourite', async (req, res)=> {

  try {
    const favouriteRecipe = await Favourite.create({
      recipe: req.params.id,
      user: req.session.currentUser._id
    });

    res.redirect('/recipes');

  } catch(e) {
      res.render('error');
      console.log(`An error cocurred in /recipes/:id/favourite post: ${e}`);
    }
  });

  
//Remove favourite
router.post('/favourites/:id/delete', async (req, res) => {
  try {
    await Favourite.findByIdAndDelete(req.params.id);
    res.redirect('/recipes/favourite');
  } 
  catch(e) {
      res.render('error');
      console.log(`An error cocurred in /recipes/:id/favourite post: ${e}`);
  }
});

module.exports = router;