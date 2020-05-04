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
    }
  }


  // Fetches a random product from the database
  componentDidMount() {
    let randomId = this.randomProductId();
    //this.fetchProduct(randomId);
    this.fetchProduct('EF4974');
  }

  // Generates a random product ID
  randomProductId() {
    let index = Math.floor(Math.random() * data.length);
    return data[index].id;
  }

  // Fetches product details for a given product ID
  // and sets the state
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
    return <ProductInfo product={this.state.product}/>
  }
}

export default App;