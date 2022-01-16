const mongoose = require("mongoose");

//Aufbau der Pinnwandeinträge
const cardSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
  },
});

exports.Card = mongoose.model("Card", cardSchema);
