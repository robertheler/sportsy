import React, { Component } from 'react';
import ProductInfo from './ProductInfo.jsx';
const data = require('../../../db/data/clean_data_to_seed.json');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: data[0]
    }
    console.log(this.state);
  }
  render() {
    return <ProductInfo />
  }
}

export default App;