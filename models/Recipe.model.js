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
    required: true
  },
  method: {
    type: [ String ],
    required: true
  },
  suitable: {
    type: String,
    enum : ['Vegetarian', 'Vegan', 'Lactose free', 'Gluten free']
  },
  allergy: {
    type: String,
    enum : ['Nuts', 'Seafood']
  },
  reviews: [
    {
      user: String,
      comment: String
    }
  ]

// by: {{username}}

})
module.exports = model("Recipe", recipeSchema);