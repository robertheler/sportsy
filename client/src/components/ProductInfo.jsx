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
      color: 0 // index of color to display; default is first one
    }

    this.handleColorChange = this.handleColorChange.bind(this);
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