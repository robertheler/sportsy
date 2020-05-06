// Fetches url of selected image
const fetchImageLocation = (imageFileName) => {
  let url = `https://adidasproducts.s3-us-west-1.amazonaws.com/images/${imageFileName}`;
  return url;
}

export default fetchImageLocation;
