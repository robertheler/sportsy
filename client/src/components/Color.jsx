import React, { Component } from 'react';
import styled from 'styled-components';
import fetchImageLocation from '../helper.js';

const RenderDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledImage = styled.div`
  width: 60px;
  height: 60px;
  background: url(${props => props.url});
  background-size: 100%;
  margin: 0 5px;
  opacity: ${props => props.isSelected === 'true' ? "1" : "0.5"};
  box-sizing: border-box;
  border-bottom: ${props => props.isSelected === 'true' ? "3px solid black" : "none"};
  box-sizing: border-box;
  &:hover {
    opacity: 1;
  }
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
        <StyledImage url={url} onClick={this.handleColorChange} isSelected={this.props.isSelected.toString()}/>
      </RenderDiv>
    );
  }
}

export default Color;