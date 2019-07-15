const express = require('express');
const axios = require('axios');
const router = express.Router();
const goodreads = require('../utils/goodreads');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const goodReadsKey = 'P0icIlIIWSU2q5mTuUzepA';
  const params = req.query;
  const url = `http://www.goodreads.com/search/index.xml?q=${params.q}&page=${params.page}&key=${goodReadsKey}`
  const value = await goodreads.searchBooks(url);
  res.send(value);
});


module.exports = router;
