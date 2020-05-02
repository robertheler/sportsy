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

  }

  render() {
    return (
      <RenderDiv>
        <ImageViewer />
        <OrderInfo />
      </RenderDiv>
    );
  }
}

export default ProductInfo;