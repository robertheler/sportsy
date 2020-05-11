import React, { Component, Fragment } from 'react';
import ProductInfo from './ProductInfo.jsx';
import Header from './Header.jsx';
import $ from 'jquery';


const data = require('../../../db/data.json');

const PORT_1 = process.env.PRODUCT_PORT || 3001;
const url = `http://127.0.0.1:${PORT_1}/api/products/`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data[0]
    }
  }

  // Fetches a random product from the database
  componentDidMount() {
    let randomId;

    // to fetch a random product, uncomment this
    //randomId = this.randomProductId();

    // to fetch a complete product for demonstration purposes
    // uncomment this for IDs: PERF001, PERF002, PERF003, PERF004
    randomId = 'PERF00' + Math.floor(1 + Math.random() * 4);

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
      url: url + id,
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
        <ProductInfo product={this.state.product}/>
      </Fragment>
    )
  }
}

export default App;