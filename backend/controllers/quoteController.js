const Quote = require('../models/Quote');

exports.getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json({ quote: quote.text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuote = async (req, res) => {
  const { text } = req.body;
  try {
    const quote = new Quote({ text, user: req.user.id });
    await quote.save();
    res.status(201).json({ message: 'Quote created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ user: req.params.userId });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
