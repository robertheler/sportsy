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

let ShoeModel = mongoose.model('Shoe', schema);

// connection options to remove warnings
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect('mongodb://mongo:27017/adidas', options);

// findAll retrieves all shoes
function findAll(callback) {
  ShoeModel.find({}, callback);
}

// findOne will retrieve the shoe associated with the given id
function findOne(id, callback) {
  mongoose.connect('mongodb://mongo:27017/adidas', options, () => {
    ShoeModel.find({id: id}, callback)
  })
}

// insertOne inserts a shoe into the db
function insertOne(shoe, callback) {
  ShoeModel.create(shoe, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
