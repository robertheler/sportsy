import React, { Component } from 'react';
import styled from 'styled-components';
import Color from './Color.jsx'

const RenderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-left: 1px solid #ebedee;
  justify-content: center;
  align-items: center;
`;

class ColorList extends Component {
  constructor(props){
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color){
    this.props.handleColorChange(color);
  }

  render(){
    let arrayOfColors = [];
    for (let i = 0; i < this.props.product.colors.length; i++) {
      // currently selected ThumbNail is passed prop isSelected = true
      // because it needs to be styled differently
      if(i === this.props.color) {
        arrayOfColors.push(<Color key={i} color={i} product={this.props.product} isSelected={true} handleColorChange={this.handleColorChange}/>)
      } else {
        arrayOfColors.push(<Color key={i} color={i} product={this.props.product} isSelected={false} handleColorChange={this.handleColorChange}/>)
      }
    }
    return (<RenderDiv>{arrayOfColors}</RenderDiv>);
  }
}

export default ColorList;