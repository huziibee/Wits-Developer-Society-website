const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const cors = require('cors');
const path = require('path');
require('./database');

const history = require('connect-history-api-fallback');

// import history from 'connect-history-api-fallback';

const app = express();
// const portt = 3010;

// Serve static files from the 'public' folder
app.use(express.static(path.resolve(__dirname, './dist'), { maxAge : '1y', etag: false}));
app.use(history());



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/auth', authRoute);


// Handle requests that don't match any routes by serving the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen( process.env.PORT || 3001, () => {
  console.log(`Example app listening on port ${  process.env.PORT || 3001}`);
});
