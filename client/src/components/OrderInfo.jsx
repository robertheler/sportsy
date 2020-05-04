import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  min-height: 300px;
  min-width: 300px;
  flex-grow: 1;
  padding:20px;
  border: 1px solid gray;
`;

class OrderInfo extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <RenderDiv>
      </RenderDiv>
    );
  }
}

export default OrderInfo;