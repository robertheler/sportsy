import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNail from './ThumbNail.jsx';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  position: relative;
  top: 100px;
  overflow: hidden;

`;

class ThumbNailList extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <RenderDiv>
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
      </RenderDiv>
    );
  }
}

export default ThumbNailList;