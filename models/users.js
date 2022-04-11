const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema, "users");
