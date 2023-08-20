const mongoose = require('mongoose');

let priorurl = 'mongodb://127.0.0.1:27017/blogcard';


mongoose
  .connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));
