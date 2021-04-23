const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

const DB_NAME = 'food-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const recipes = [
  {
    pictureUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1274503_8-05ae02b.jpg?quality=90&webp=true&resize=440,400',
    name: 'Chicken & chorizo jambalaya',
    cuisine: 'Cajun',
    prepTime: '10 mins',
    cookTime: '45 mins',
    serves: 4,
    ingredients: [
      '1 tbsp olive oil', '2 chicken breasts, chopped', '1 onion, diced',
      '1 red pepper, thinly sliced', '2 garlic cloves, crushed', '75g chorizo, sliced',
      '1 tbsp Cajun seasoning', '250g long grain rice', '400g can plum tomato',
      '350ml chicken stock'
    ],
    method: [
      'Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden.',
      'Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft.',
      'Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.',
      'Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.'
    ] 
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} recipes`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

