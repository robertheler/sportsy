import React, { Component, Fragment } from 'react';
import ProductInfo from './ProductInfo.jsx';
import Header from './Header.jsx';
import $ from 'jquery';

const data = require('../../../db/data.json');
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
    this.fetchProduct(randomId);

    // Below is a list of product IDs that look partiticularly good
    // EF4974, BD7633, EE8862, FY0728, G27707, EE7161, FX8003, EH0249, FV3743; EH0249;
    // this.fetchProduct('FV3642'); // FV3743
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
    return(
      <Fragment>
        <Header />
        < ProductInfo product={this.state.product}/>
      </Fragment>
    )
  }
}

export default App;