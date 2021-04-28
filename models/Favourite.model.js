const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favouriteSchema = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});


const Favourite = model('Favourite', favouriteSchema);
module.exports = Favourite;