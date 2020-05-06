import React, { Component } from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import Collection from './Collection.jsx';
import Financing from './Financing.jsx';
import AvailableColors from './AvailableColors.jsx';
import ColorList from './ColorList.jsx';

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
        <Review product={this.state.product}/>
        <Collection product={this.state.product}/>
        <Financing product={this.state.product} color={this.state.color}/>
        <AvailableColors product={this.state.product} color={this.state.color}/>
        <ColorList product={this.state.product} color={this.state.color}/>
      </RenderDiv>
    );
  }
}

export default OrderInfo;