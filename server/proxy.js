const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const request = require('request');

// create and use application/json parser
const proxy = express();
proxy.use(bodyParser.json());

// enable cross-origin resource sharing CORS
proxy.use(cors());

// Set a constant for the port that our express server will listen on
const PORT = 3001;
const SERVER = 'http://127.0.0.1:3000/'

proxy.use(express.static(path.join(__dirname, '../client/dist')));
// retrieves shoe by :id
proxy.get('/:id', function(req, res) {
  request(SERVER + `api/products/${req.params.id}`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(500).end();
    }
  });
});


// Start the server on the provided port
proxy.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
