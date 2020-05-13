var data = require('./data.json');
var mongoose = require('mongoose');
var Shoes = require('./models/shoe.js');
var each = require('async/each');
//mongo:27017

let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect('mongodb://mongo:27017/adidas', options, function() {
    /* Drop the DB */
  //mongoose.connection.db.dropDatabase();

  // inserts each JSON-formatted shoe into the database
  // seed with npm run seed-database or node seed.js
  each(data,
    function(shoe, callback) {
      Shoes.insertOne(shoe, (err) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          console.log(`${shoe.id} inserted into the collection`);
          callback();
        }
      })
    },
    function(err) {
      if (err) {
        console.log('At least one product not inserted into the database');
        mongoose.connection.close()
        process.exit();
      } else {
        console.log('All products succesfully inserted into the database');
        mongoose.connection.close();
        process.exit();
      }
    }
  )
});
