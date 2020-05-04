import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 16px;
  word-wrap: normal;
  margin: 0 0 15px 0;
`;

class Price extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: this.props.color,
    }
  }
  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color) {
      this.setState({
        product: this.props.product,
        color: this.props.color,
      })
    }
  }

  render() {
    let listPrice = this.state.product.colors[this.state.color].list_price;
    let salePrice = this.state.product.colors[this.state.color].sale_price;
    if (listPrice === salePrice) {
      return <RenderDiv>
        ${listPrice}
      </RenderDiv>
    }

    return (
      <RenderDiv>
        {$+listPrice}
      </RenderDiv>
    );
  }
}

export default Price;