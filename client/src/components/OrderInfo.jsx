import React, { Component } from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import Collection from './Collection.jsx';
import Financing from './Financing.jsx';

const RenderDiv = styled.div`
  min-height: 300px;
  flex-basis: 300px;
  flex-grow: 1;
  font-family: AdineuePRO,Helvetica;
  padding: 20px;
  flex-direction: column;
  flex-wrap: wrap;
`;

class OrderInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: 0
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
        <Review product={this.state.product}></Review>
        <Collection product={this.state.product}></Collection>
        <Financing product={this.state.product} color={this.state.color}></Financing>
      </RenderDiv>
    );
  }
}

export default OrderInfo;