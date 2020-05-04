import React, { Component } from 'react';
import Price from './Price.jsx';
import styled from 'styled-components';

const RenderDiv = styled.div`
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 16px;
  word-wrap: normal;
  margin: 0 0 15px 0;
`;
const Installments = styled.div`
`

const LearnMore = styled.a`
  color: black;
`

class Financing extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: this.props.color
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
    let installment = Number(this.state.product.colors[this.state.color].sale_price / 3).toFixed(2);
    return (
      <RenderDiv>
        <Price product={this.state.product} color={this.state.color}></Price>
        <span>or 3 interest-free payments of </span><strong>{installment}</strong><span> with Affirm.</span>
        <br />
        <LearnMore href="">Learn More</LearnMore>
      </RenderDiv>
    );
  }
}

export default Financing;