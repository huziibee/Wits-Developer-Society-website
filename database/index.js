const mongoose = require('mongoose');

let priorurl = 'mongodb://127.0.0.1:27017/blogcard';
let newurl = 'mongodb+srv://huziibee:Huzaifah%40mongodb43@devsocblog1.rpe5qpu.mongodb.net/blogs';

mongoose
  .connect(process.env.MONGOURL || newurl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));
