const express = require('express');
const router  = express.Router();
const { FoodDatabaseClient } = require('edamam-api');
 
const client = new FoodDatabaseClient({
  appId: process.env.API_ID,
  appKey: process.env.API_KEY
});
 



/* GET home page */
router.get('/', async (req, res, next) => {
  const foods = await client.search({ query: 'Flour'});
  console.log(foods)
  res.render('index');
});


module.exports = router;
