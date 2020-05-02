import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  background-color: red;
  min-height: 300px;
  min-width: 300px;
  flex-grow: 1;

  padding:0px;
`;

class OrderInfo extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <RenderDiv>
        Hello World
      </RenderDiv>
    );
  }
}

export default OrderInfo;