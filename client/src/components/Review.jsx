import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-style: bold;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  word-wrap: normal;
  margin: 0 0 15px 0;
`;

const StyledA = styled.a`
  color: black;
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

class Review extends Component {
  constructor(props){
    super(props);
  }

  //TODO Render 5 stars filled appropriately
  render() {
    return (
      <RenderDiv>
        <StyledCollection>{this.props.product.collection_name}</StyledCollection>
        <StyledA href="">{this.props.product.review_count}</StyledA>
      </RenderDiv>
    );
  }
}

export default Review;