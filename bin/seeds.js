const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
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
  },
  {
    pictureUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/aspargus-risotto-7d7caec.jpg?quality=90&webp=true&resize=440,400',
    name: 'Asparagus risotto',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    serves: 4,
    ingredients: [
      '1 bunch asparagus (about 200g)', '800ml vegetable stock', '1 tbsp olive oil',
      '25g butter', '1 small onion , finely chopped', '175g risotto rice',
      '100ml white wine or vermouth (optional)', '25g parmesan or vegetarian alternative, finely grated'
    ],
    method: [
      'Snap the woody ends off the asparagus stalks and tip them into a saucepan with the stock. Put on a low heat to very gently simmer. Meanwhile, cut off the tips of the asparagus, add to the stock for exactly 1 min. Scoop out with a slotted spoon and set aside. Finely slice the rest of the stalks into rounds.',
      'Heat the oil and half the butter in a heavy, wide pan. Cook the onions gently for 5 mins until soft, stirring often. Add the chopped asparagus stalks and cook for 2 mins more. Add the rice and continously stir for a few minutes until it turns semi-transparent and makes a hissing sound.',
      'Stir in the wine, if using – it will evaporate almost immediately. Reduce the heat to a gentle simmer. Add the stock, a ladleful at a time, stirring between each addition until it is absorbed, about 15 mins.',
      'Try the rice – it should feel just cooked with a slight bite to it. Stir in the asparagus tips and any last dregs of stock and cook for 1 or 2 mins more. Remove from the heat and top with the remaining butter and most of the parmesan. Season generously, cover and leave for a few minutes to settle.',
      'Give the risotto a thorough stir to incorporate the butter and cheese and serve straight away with the remaining parmesan for sprinkling over.'
    ],
    suitable: ['Vegetarian']
  },
  {
    pictureUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-192585_12-a46c1fb.jpg?quality=90&webp=true&resize=440,400',
    name: 'Strawberry cheesecakes',
    cuisine: 'Dessert',
    prepTime: '10 mins',
    cookTime: '1 min',
    serves: 4,
    ingredients: [
      '85g low-fat biscuit (we used WeightWatchers ginger biscuits)', '200g tub extra-light soft cheese', '200g tub 0% fat Greek yogurt',
      '4 tbsp caster sugar', 'few drops vanilla extract', '2 tbsp good-quality strawberry jam',
      '100g strawberry , hulled and sliced'
    ],
    suitable: ['Vegetarian']
  }
];

Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} recipes`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

