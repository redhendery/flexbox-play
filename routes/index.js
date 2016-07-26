const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Alister Hendery' });
});

router.get('/contact', (req, res) => {
  res.render('contact')
});

router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
