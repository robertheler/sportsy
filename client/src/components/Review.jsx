import React, { Component } from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';

const RenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-style: bold;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  word-wrap: normal;
  margin: 0 0 20px 0;
`;

const StyledA = styled.span`

  text-decoration: underline;
`
const StyledCollection = styled.div`
  font-weight: 400;
  margin: 10 0 2px 0;
  color: #767677;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledSpan = styled.span`
color: black;
  &:hover {
    color: #fff; !important;
    background-color: #000; !important;
  }
  cursor: pointer;
`

class Review extends Component {
  constructor(props){
    super(props);
  }

  //TODO Render 5 stars filled appropriately
  render() {
    return (
      <RenderDiv>
        <StyledCollection>{this.props.product.collection_name}</StyledCollection>
        <StyledSpan>
          <Stars review={this.props.product.review_average}></Stars>
          <StyledA href="">{this.props.product.review_count}</StyledA>
        </StyledSpan>
      </RenderDiv>
    );
  }
}

export default Review;