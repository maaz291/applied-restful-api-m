const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  release_year: {
    type: Number,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  actors: {
    type: Array,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
