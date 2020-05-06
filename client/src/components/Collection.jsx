import React, { Component } from 'react';
import styled from 'styled-components';

const StyledProductName = styled.h1`
  font-size: 52px;
  font-family: AdihausDIN Cn,Helvetica;
  font-weight: 500;
  margin: 0 0 7px 0;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

class Collection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <StyledProductName>{this.props.product.name}</StyledProductName>
    );
  }
}

export default Collection;