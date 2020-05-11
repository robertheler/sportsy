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
const PORT_1 = process.env.REVIEWSPORT || 3001;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/products', router);
// Start the server on the provided port
app.listen(PORT_1, () => console.log(`Listening on port: http://localhost:${PORT_1}`));

