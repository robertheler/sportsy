import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyledProductName = styled.h1`
  font-size: 52px;
  font-family: AdihausDIN Cn,Helvetica;
  font-weight: 500;
  margin: 0 0 3px 0;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1;
`;

const StyledColorName = styled.div`
  font-size: 11px;
  font-family: AdihausDIN,Helvetica;
  font-weight: 400;
  margin: 0 0 30px 0;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-wrap: normal;
  color: #767677;
`;

class Collection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Fragment>
        <StyledProductName>{this.props.product.name}</StyledProductName>
        <StyledColorName>{this.props.product.colors[this.props.color].name}</StyledColorName>
      </Fragment>
    );
  }
}

export default Collection;