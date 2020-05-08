import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 16px;
  word-wrap: normal;
  margin-bottom: -10px;
`

const SalePrice = styled.span`
  color: #e32b2b
`;

const OldPrice = styled.span`
  color: #767677;
  text-decoration: line-through;
`;

class Price extends Component {
  constructor(props){
    super(props);
  }

  // price will be redered differently depending wether the product is on sale or not
  render() {
    let listPrice = this.props.product.colors[this.props.color].list_price;
    let salePrice = this.props.product.colors[this.props.color].sale_price;

    // if not on sale, render plain, in black
    if (listPrice === salePrice) {
      return <RenderDiv>${listPrice}</RenderDiv>

    // if on sale, render sale price in red, old price crossed out in gray
    } else {
      return (
        <RenderDiv>
          <SalePrice>${salePrice} </SalePrice><OldPrice>${listPrice}</OldPrice>
        </RenderDiv>
      );
    }

  }
}

export default Price;