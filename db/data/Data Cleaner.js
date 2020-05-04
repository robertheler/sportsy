const data = require('./data_to_seed.json');
const fs = require('fs');

let actualImages = 0;
let expectedImages = 0;

// for each shoe and shoe-color
// check if corresponding image has been downlaoded
// if not, remove image from JSON
for (let shoe of data) {
  for (let color of shoe.colors) {
    for (var i = 0; i < color.images.length; i++) {
      expectedImages++;
      let image = color.images[i];
      let path = `./images/${image}`;
      try {
        if (fs.existsSync(path)) {
          actualImages++
        } else {
          console.log(image, 'was deleted from JSON');
          color.images.splice(i, 1);
          i--;
        }
      } catch(err) {
      }
    }
  }
}

// difference is # of images removed from JSON
console.log(expectedImages, actualImages);

// remove all colors for each there are no pics left
for (let shoe of data) {
  for (var i = 0; i < shoe.colors.length; i++) {
    let color = shoe.colors[i];
    if (color.images.length === 0) {
      shoe.colors.splice(i, 1);
      i--;
      console.log('Color removed due to no available pics');
    }
  }
}

// remove all shoes for each there are colors left
for (var i = 0; i < data.length; i++) {
  let shoe = data[i];
  if (shoe.colors.length === 0) {
    data.splice(i, 1);
    i--;
    console.log('shoe removed due to no available colors with pics');
  }
}



actualImages = 0;
expectedImages = 0;

// re-verify that after data cleansing, each image in the JSON
// was actually downloaded
for (let shoe of data) {
  for (let color of shoe.colors) {
    for (var i = 0; i < color.images.length; i++) {
      expectedImages++;
      let image = color.images[i];
      let path = `./images/${image}`;
      try {
        if (fs.existsSync(path)) {
          actualImages++
        } else {
          console.log(image, 'was deleted from JSON');
          color.images.splice(i, 1);
          i--;
        }
      } catch(err) {
      }
    }
  }
}

// these two values should be the same if all images exist
console.log(expectedImages, actualImages);

// make 75% of the products on sale
for (let shoe of data) {
  for (let color of shoe.colors) {
    let shouldBeOnSale = Math.random() >= 0.25; //random boolean, true 75% of the time
    if (shouldBeOnSale) {
      color.sale_price = color.list_price - 20;
    }
  }
}

 // write JSON of clean data
 fs.writeFile('clean_data_to_seed.json', JSON.stringify(data, null, 2), (err) => {
  console.log(err);
})