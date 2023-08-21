// const express = require('express')
// const bodyParser = require('body-parser')
// const authRoute = require('./routes/auth')
// const cors = require('cors')
// require('./database')
// const app = express()
// const port = 3001

// app.use(express.json())
// app.use(bodyParser.urlencoded({extended : true})) 
// app.use(bodyParser.json())
// app.use(cors())
// app.use('/api/v1/auth', authRoute)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const cors = require('cors');
const path = require('path');
require('./database');

// const history = require('connect-history-api-fallback');

// import history from 'connect-history-api-fallback';

const app = express();
// const portt = 3010;

// Serve static files from the 'public' folder
app.use(express.static('./dist'));
app.use(history());



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/auth', authRoute);


// Handle requests that don't match any routes by serving the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist','index.html'));
});

app.listen( 80, () => {
  console.log(`Example app listening on port ${80}`);
});
