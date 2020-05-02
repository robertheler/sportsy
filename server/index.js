const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

// Import the path module from node to create absolute file paths for express static

// Instantiate the express server
const app = express();

// create and use application/json parser
app.use(bodyParser.json());

// enable cross-origin resource sharing CORS
app.use(cors());

// Set a constant for the port that our express server will listen on
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/shoes', router);
// Start the server on the provided port
app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
