import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  text-decoration: underline;
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 14px;
  word-wrap: normal;
  margin: 0 0 15px 0;
`;

const StyledA = styled.a`
  color: black;
`

class Review extends Component {
  constructor(props){
    super(props);
  }

  //TODO Render 5 stars filled appropriately
  render() {
    return (
      <RenderDiv>
        <StyledA href="">{`Read all ${this.props.product.review_count} reviews`}</StyledA>
      </RenderDiv>
    );
  }
}

export default Review;