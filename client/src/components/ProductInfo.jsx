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
  border-bottom: 1px solid #ebedee;
`;

class ProductInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      // index of color to display; default is 0
      color: 0
    }
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({
        color: Math.floor(Math.random() * this.props.product.colors.length)
      })
    }
  }
  handleColorChange(color) {
    this.setState({color})
  }

  render() {
    return (
      <RenderDiv>
        <ImageViewer product={this.props.product} color={this.state.color} handleColorChange={this.handleColorChange}/>
        <OrderInfo product={this.props.product} color={this.state.color}/>
      </RenderDiv>
    );
  }
}

export default ProductInfo;