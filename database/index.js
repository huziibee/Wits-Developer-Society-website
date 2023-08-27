const mongoose = require('mongoose');

mongoose
  .connect( procesprocess.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));