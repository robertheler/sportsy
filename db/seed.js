var data = require('./data.json');
var mongoose = require('mongoose');
var Shoes = require('./models/shoe.js');

// full products for demonstration
var perf1 = require('./PERF001.json');
var perf2 = require('./PERF002.json');
var perf3 = require('./PERF003.json');
var perf4 = require('./PERF004.json');

mongoose.connect('mongodb://localhost/adidas',function(){
    /* Drop the DB */
    //mongoose.connection.db.dropDatabase();
    Shoes.insertOne(perf1, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${perf1.id} inserted into the collection`)
      }
    });
    Shoes.insertOne(perf2, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${perf1.id} inserted into the collection`)
      }
    });
    Shoes.insertOne(perf3, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${perf1.id} inserted into the collection`)
      }
    });
    Shoes.insertOne(perf4, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${perf1.id} inserted into the collection`)
      }
    });
});


inserts each JSON-formatted shoe into the database
seed with npm run seed-database or node seed.js
const seed = function() {
  for (let shoe of data) {
    Shoes.insertOne(shoe, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${shoe.id} inserted into the collection`)
      }
    });
  }
};

seed();

//mongoose.disconnect();
