import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  justify-content: space-between;
  font-weight: 700;
  font-style: bold;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  margin: 0 0 30px 0;
  text-transform: uppercase;
`;

class Size extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <RenderDiv>
        Select Size
      </RenderDiv>
    );
  }
}

export default Size;