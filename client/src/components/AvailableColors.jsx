import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 20px;
  font-family: AdineuePRO,Helvetica;
  font-weight: 600;
  margin: 0 0 7px 0;
  word-wrap: normal;
  text-transform: uppercase;
`;

class AvailableColors extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <StyledHeader>Available colors</StyledHeader>
    );
  }
}

export default AvailableColors;