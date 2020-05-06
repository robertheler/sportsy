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
  padding: 30px 40px;
  flex-direction: column;
  flex-wrap: wrap;
`;

class OrderInfo extends Component {
  constructor(props){
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color){
    this.props.handleColorChange(color);
  }

  render(){
    return (
      <RenderDiv>
        <Review product={this.props.product}/>
        <Collection product={this.props.product}/>
        <Financing product={this.props.product} color={this.props.color}/>
        <AvailableColors product={this.props.product} color={this.props.color}/>
        <ColorList product={this.props.product} color={this.props.color} handleColorChange={this.handleColorChange}/>
      </RenderDiv>
    );
  }
}

export default OrderInfo;