const mongoose = require("mongoose");

// const DataSchema = new mongoose.Schema({
//   end_year: String,
//   intensity: Number,
//   sector: String,
//   topic: String,
//   insight: String,
//   url: String,
//   region: String,
//   start_year: String,
//   impact: String,
//   added: String,
//   published: String,
//   country: String,
//   relevance: Number,
//   pestle: String,
//   source: String,
//   title: String,
//   likelihood: Number,
// });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const  userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
