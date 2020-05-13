var express = require('express');
var Shoes = require('../db/models/shoe.js');
var router = express.Router();

// retrieves shoe by :id
router.route('/:id').get(function(req, res) {
  Shoes.findOne(req.params.id, (err, products) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      res.json(products.pop());
    }
  });
});


module.exports = router;
