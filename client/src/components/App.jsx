import React, { Component } from 'react';
import ProductInfo from './ProductInfo.jsx';
import $ from 'jquery';

const data = require('../../../db/data/clean_data_to_seed.json');
const PORT = 'http://127.0.0.1:3000/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: data[0],
      color: 0
    }

  }

  componentDidMount() {
    let id = this.fetchProductId();
    this.fetchProduct(id);
  }

  fetchProductId() {
    return 'FV5361'; // where will this id be coming from?
  }

  fetchProduct(id) {
    $.ajax({
      url: PORT + `api/products/${id}`,
      method: 'get',
      dataType: 'json',
      success: (product) => {
        this.setState({product})
      },
      error: (err) => console.log(err)
    })
  }
  render() {
    return <ProductInfo product={this.state.product} color={this.state.color}/>
  }
}

export default App;