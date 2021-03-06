const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const recipeSchema = new Schema ({
  pictureUrl: String,
  name: {
    type: String,
    required: true
  },
  cuisine: String,
  prepTime: {
    type: String,
    required: true
  },//x mins
  cookTime: {
    type: String,
    required: true
  },
  serves: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [String],
    required: true,
    trim: true
  },
  method: {
    type: [ String ],
    required: true,
    trim: true
  },
  suitable: {
    type: [String],
    enum : ['Vegetarian', 'Vegan', 'Lactose Free', 'Gluten Free']
  },
  allergy: {
    type: [String],
    enum : ['Nuts', 'Seafood']
  },
  reviews: [
    {
      user: String,
      comment: String
    }
  ]  
});

module.exports = model("Recipe", recipeSchema);