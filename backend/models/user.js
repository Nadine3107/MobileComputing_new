const mongoose = require("mongoose");

//Aufbau des Userprofils
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  coronaCertificate: {
    type: String,
  },
});

exports.User = mongoose.model("User", userSchema);
