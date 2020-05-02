import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';

const RenderDiv = styled.div`
  min-height: 700px;
  flex-basis: 800px;
  flex-grow: 3;
  width: auto;
  background-color: #ECEFF1;
  padding-left: 20px;
  vertical-align: middle;
`;

class ImageViewer extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <RenderDiv>
        <ThumbNailList />
      </RenderDiv>
    );
  }
}

export default ImageViewer;