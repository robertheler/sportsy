import React, { Component } from 'react';
import styled from 'styled-components';
import fetchImageLocation from '../helper.js';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 52px;
  border: ${props => (props.isSelected === true ? '1px solid black' : '1px solid gray')};
  border-bottom: ${props => (props.isSelected === true ? '2px solid black' : '1px solid gray')};
  margin-bottom: 10px;
  box-sizing: border-box;
  background: url(${props => props.url});
  background-size: 100%;
  &:hover {
    border: 1px solid black;
    border-bottom: 2px solid black;
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