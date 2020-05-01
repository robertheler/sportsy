const data = require('./rawDataFromAdidas.json');
const download = require('image-downloader');
const fs = require('fs');

let seed_data = [];
let indexOfCurrentShoe;
let numberOfColorsForCurrentShoe;
let colorsAlreadyAdded;

// This for loop parses the raw JSON from adidas.com mostly
// to download pics. Other product info (such as reviews and number
//of colors) is randomly generated and formatted to fit my schema.
//
// Two files are generated:
//
// picUrls.txt - contains the urls of all the pics downloaded
// data.json - fictitious JSON-formatted data ready for MongoDB
//
for (var i = 0; i < data.length; i++) {
  let item = data[i].item;

  // skip over non-shoe items because I want to
  if (item["03 Title"].indexOf('Shoes') === -1) {
    continue
  }

  // add {size, quantity} to the inventory if and only if
  // the current color exists for the given shoe AND
  // the inventory doesn't already contain info for the current size
  if (indexOfCurrentShoe) {
    let colorIndexIfExists = colorAreadyExists(item["05 Color"], seed_data[indexOfCurrentShoe].colors);
    if (colorIndexIfExists > -1) {
      if (!sizeAlreadyExists(item["06 Size"],seed_data[indexOfCurrentShoe].colors[colorIndexIfExists].inventory)) {
        seed_data[indexOfCurrentShoe].colors[colorIndexIfExists].inventory.push({
          size:item["06 Size"],
          quantity: item["08 Quantity"]
        })
      }
      continue
    }
  }

  // add a new color entry for the given shoe model if
  // desired number of colors hasn't been reached
    if (colorsAlreadyAdded < numberOfColorsForCurrentShoe) {
      colorsAlreadyAdded++;
      seed_data[indexOfCurrentShoe].colors.push({
        id: colorsAlreadyAdded - 1,
        url: item["13 URL"],
        name: item["05 Color"],
        list_price: item["09 List Price"],
        sale_price: item["10 Sale Price"],
        inventory: [{
          size:item["06 Size"],
          quantity: item["08 Quantity"]
        }],
        images: item["15 Images"].split('|')
      });

  // if desired number of colors has been reached
  // create a new shoe style object and add it to the JSON data
  } else {
    colorsAlreadyAdded = 1;
    numberOfColorsForCurrentShoe = getNumberOfColors(); //random
    indexOfCurrentShoe = seed_data.length;

    // pseudo-random shoe
    // e.g. images names are accurate in order to facilitate later downlaod
    let shoe = {
      id: item["02 SKU"],
      name: item["03 Title"],
      collection_name: getCollection(),
      review_count: getReviewCount(),
      review_average: getReviewAverage(),
      colors: [{
        id: colorsAlreadyAdded - 1,
        url: item["13 URL"],
        name: item["05 Color"],
        list_price: item["09 List Price"],
        sale_price: item["10 Sale Price"],
        inventory: [{
          size:item["06 Size"],
          quantity: item["08 Quantity"]
        }],
        images: item["15 Images"].split('|')
      }]
    }
    seed_data.push(shoe);
  }
}

let json = '';
let picUrls = '';

// if enough shoe objects have been generated
// add each shoe to the JSON file
if (seed_data.length > 100) {
  for (let shoe of seed_data) {
    json = json + JSON.stringify(shoe) + '\n';

    // for color of the current shoe,
    // add each image link to picUrls.txt
    for (let color of shoe.colors) {
      for (let i = 0; i < color.images.length; i++) {
        picUrls = picUrls + color.images[i] + '\n';

        // rename and download each image in the ./Images folder
        let picName = `${shoe.id}_color${color.id}_pic${i}.jpg`;
        color.images[i] = picName;

        const options = {
          url: color.images[i],
          dest: `./Images/${picName}`,
          timeout: 10000
        }
        // downloadIMG(options); <-------------------------- this will obliterate your RAM and will take a long time
      }
    }
  }

  // write JSON
  fs.writeFile('data_to_seed.json', JSON.stringify(seed_data, null, 2), (err) => {
    console.log(err);
  })

  // write URL of images
  fs.writeFile('picUrls.txt', picUrls, (err) => {
    console.log(err);
  })
}

// async image downlaod
async function downloadIMG(options) {
  try {
    const { filename, image } = await download.image(options)
    console.log(filename) // => /path/to/dest/image.jpg
  } catch (e) {
    //console.error(e)
  }
}

// returns index of color if it already exists
// in the color array of a shoe
function colorAreadyExists(color, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === color) {
      return i
    }
  }
  return -1
}

// returns true if size already in inventory
function sizeAlreadyExists(size, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].size === size) {
      return true
    }
  }
  return false
}

// generates random shoe colleciton name
function getCollection() {
  let collections = ['Originals', 'Running', 'Training', 'Workout', 'Sports', 'Athletic'];
  return collections[Math.floor(Math.random() * collections.length)]
}

// generates random number of reviews between 30-1000
function getReviewCount() {
  return Math.floor(Math.random() * (1000 - 30) + 30);
}

// generates random star review average between 3.0 and 5.0
// rounded to 2 decimals
function getReviewAverage() {
  return (Math.random() * (5 - 3) + 3).toFixed(2) // rating between 3 and 5
}

//generates random number of colors for a given shoe
// between 2 and 6
function getNumberOfColors() {
  return Math.floor(Math.random() * 5) + 2;
}