const express = require('express');
const router = express.Router();
const Movie = require('./models');

router.get('/movies', async (_req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

module.exports = router;
