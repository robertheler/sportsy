import React, { Component } from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import Title from './Title.jsx';
import Financing from './Financing.jsx';
import AvailableColors from './AvailableColors.jsx';
import ColorList from './ColorList.jsx';
import Size from './Size.jsx';
import OutOfStock from './OutOfStock.jsx';
import PurchaseButton from './PurchaseButton.jsx';
import Offers from './Offers.jsx';

const RenderDiv = styled.div`
  min-height: 350px;
  font-family: AdineuePRO,Helvetica;
  padding: 25px 30px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 350px;
  flex-grow: 1;
  border-left: 1px solid #ebedee;
  border-top: 1px solid #ebedee;
  word-wrap: normal;
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
        <Title product={this.props.product} color={this.props.color}/>
        <Financing product={this.props.product} color={this.props.color}/>
        <Size product={this.props.product} color={this.props.color}/>
        <OutOfStock product={this.props.product} color={this.props.color}/>
        <PurchaseButton product={this.props.product} color={this.props.color}/>
        <Offers/>
      </RenderDiv>
    );
  }
}

export default OrderInfo;