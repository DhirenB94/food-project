const { FoodDatabaseClient } = require('edamam-api');
 
const client = new FoodDatabaseClient({
  appId: process.env.API_ID,
  appKey: process.env.API_KEY
});

const nutrients = client.getNutrients({ ingredients: [{ quantity, measureURI, foodId }]});