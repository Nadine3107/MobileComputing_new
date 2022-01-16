const mongoose = require("mongoose");

//Aufbau der Kategorien
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});

exports.Category = mongoose.model("Category", categorySchema);
