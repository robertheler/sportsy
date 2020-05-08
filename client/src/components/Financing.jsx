import React, { Component } from 'react';
import Price from './Price.jsx';
import styled from 'styled-components';

const RenderDiv = styled.div`
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 16px;
  word-wrap: normal;
  margin: 0 0 35px 0;
`;
const LearnMore = styled.a`
  color: black;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  cursor: pointer;
  text-decoration: underline;
`
class Financing extends Component {
  constructor(props){
    super(props);
  }

  showModal(){
    console.log("Modal goes here");
  }
  render() {
    let installment = Number(this.props.product.colors[this.props.color].sale_price / 3).toFixed(2);
    return (
      <RenderDiv>
        <Price product={this.props.product} color={this.props.color}></Price>
        <br />
        <span>or 3 interest-free payments of </span><strong>{installment}</strong><span> with Affirm.</span>
        <br />
        <LearnMore onClick={this.showModal}>Learn More</LearnMore>
      </RenderDiv>
    );
  }
}

export default Financing;