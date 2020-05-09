import React, { Component } from 'react';
import styled from 'styled-components';
import fetchImageLocation from '../helper.js';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: ${props => (props.isSelected === true ? '1px solid black' : '1px solid #767677')};
  margin: 0 4px;
  box-sizing: border-box;
  background: url(${props => props.url});
  background-size: 100%;
  -webkit-transition: all 0.2s;
  &:hover {
    border: 1px solid black;
    -webkit-transform: scale(1.35);
  }
`;

class ThumbNail extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Calls the click handler function of the parent component
  // passing the index and url of the clicked ThumbNail
  handleClick(event){
    this.props.handleClick(this.props.index);
  }

  render(){
    return (
      <RenderDiv url={fetchImageLocation(this.props.image)} isSelected={this.props.isSelected} onClick={this.handleClick}>
      </RenderDiv>
    );
  }
}

export default ThumbNail;