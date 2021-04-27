
const express = require('express');
const router  = express.Router();
const { FoodDatabaseClient } = require('edamam-api');


const client = new FoodDatabaseClient({
  appId: process.env.API_ID,
  appKey: process.env.API_KEY
});

router.get('/food-search', async (req, res, next) => {    
  try {
    let foodSearch = req.query.foodSearch;
    console.log('foodsearch', foodSearch);
    const food = await client.search({query: foodSearch});
    console.log('result', food);
    res.render('food-search-results', {foods: food.hints, user: req.session.currentUser});
    
    console.log(food.hints.label);

  } catch(e) {
  console.log(`nutrient error ${e}`)
  }
});

module.exports = router;