const express = require('express');
const { getRandomQuote, createQuote, getUserQuotes } = require('../controllers/quoteController');
const authMiddleware = require('../middleware/authMiddleware');

console.log('getRandomQuote:', getRandomQuote);
console.log('createQuote:', createQuote);
console.log('getUserQuotes:', getUserQuotes);

const router = express.Router();

router.get('/random', getRandomQuote);
router.post('/', authMiddleware, createQuote);
router.get('/:userId', getUserQuotes);

module.exports = router;
