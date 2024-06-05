const Quote = require('../models/Quote');

// Get a random quote
exports.getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get quotes by username
exports.getUserQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ username: req.params.username });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all quotes
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new quote
exports.createQuote = async (req, res) => {
  const { text, username } = req.body;
  try {
    const newQuote = new Quote({ text, username });
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing quote
exports.updateQuote = async (req, res) => {
  const { text } = req.body;
  try {
    const quote = await Quote.findById(req.params.id);
    if (quote.username !== req.user.username) {
      return res.status(403).json({ error: 'Unauthorized action' });
    }
    const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, { text }, { new: true });
    res.json(updatedQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a quote
exports.deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (quote.username !== req.user.username) {
      return res.status(403).json({ error: 'Unauthorized action' });
    }
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quote deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
