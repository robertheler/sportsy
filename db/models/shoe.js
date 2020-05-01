var mongoose = require('mongoose');

var schema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  collection_name: String,
  review_count: Number,
  review_average: Number,
  colors: [
      {
          id: Number,
          url: String,
          name: String,
          list_price: Number,
          sale_price: Number,
          inventory: [
              {
                  size: String,
                  quantity: Number
              }
          ],
          images: [String]
      }
  ]
});

var ShoeModel = mongoose.model('Shoe', schema);

// findAll retrieves all authors
function findAll(callback) {
  ShoeModel.find({}, callback);
}


// findOne will retrieve the shoe associated with the given id
function findOne(id, callback) {
  ShoeModel.find({id: id}, callback);
}

// insertOne inserts a shoe into the db
function insertOne(shoe, callback) {
  console.log('inseritng..');
  ShoeModel.create(shoe, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;