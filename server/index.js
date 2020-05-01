const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import the path module from node to create absolute file paths for express static
const path = require('path');

// Instantiate the express server
const app = express();

// create and use application/json parser
app.use(bodyParser.json());

// enable cross-origin resource sharing CORS
app.use(cors());

// Set a constant for the port that our express server will listen on
const PORT = 3000;

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: http://localhost:' + PORT));