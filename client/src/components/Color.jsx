import React, { Component } from 'react';
import styled from 'styled-components';
import fetchImageLocation from '../helper.js';

const RenderDiv = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
`;

const StyledImage = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background: url(${props => props.url});
  background-size: 100%;
`;

//TODO
const StyledSelectedTick = styled.h1`
`;

class Color extends Component{
  constructor(props){
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleColorChange(){
    this.props.handleColorChange(this.props.color)
  }

  render(){
    let url = fetchImageLocation(this.props.product.colors[this.props.color].images[0]);
    return (
      <RenderDiv>
        <StyledImage url={url} onClick={this.handleColorChange}/>
      </RenderDiv>
    );
  }
}

export default Color;