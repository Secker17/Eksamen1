const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const quoteRoutes = require('./routes/quoteRoutes');

console.log('authRoutes:', authRoutes);
console.log('quoteRoutes:', quoteRoutes);

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
