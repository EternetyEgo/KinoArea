const mongoose = require("mongoose");
const AnimeScheme = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Anime", AnimeScheme)