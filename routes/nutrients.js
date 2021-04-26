
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
    const food = await client.search({query: foodSearch});

    res.render('food-search-results', {foods: food.hints});
    
    console.log(food.hints.label);

  } catch(e) {
  console.log(`nutrient error ${e}`)
  }
});

module.exports = router;