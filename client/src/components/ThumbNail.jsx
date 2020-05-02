import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 52px;
  border: 1px solid gray;
  margin-bottom: 10px;
  box-sizing: border-box;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

class ThumbNail extends Component {
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

export default ThumbNail;