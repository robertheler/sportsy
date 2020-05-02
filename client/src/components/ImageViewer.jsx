import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  background-color: #3f51b5;
  min-height: 700px;
  min-width: 960px;
  flex-grow: 3;

`;

class ImageViewer extends Component {
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

export default ImageViewer;