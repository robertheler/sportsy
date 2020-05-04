import React, { Component } from 'react';
import ImageViewer from './ImageViewer.jsx';
import OrderInfo from './OrderInfo.jsx';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: stretch;
  padding:0px;
  margin 0px;
`;

class ProductInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: this.props.product
    }
  }

  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      this.setState({
        product: this.props.product,
      })
    }
  }

  render() {
    return (
      <RenderDiv>
        <ImageViewer images={this.state.product.colors[0].images}/>
        <OrderInfo />
      </RenderDiv>
    );
  }
}

export default ProductInfo;