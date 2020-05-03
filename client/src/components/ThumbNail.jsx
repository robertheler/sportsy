import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  z-index: 1;
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
    this.state = {
      isSelected: this.props.isSelected,
      index: this.props.index,
      imageLocation: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    //console.log(this.state.index);
    this.props.handleClick(this.state.index, this.state.imageLocation);
  }
  componentDidMount() {
    this.fetchImageLocation();
  }
  // eventually from cloud, right now from disk
  fetchImageLocation(){
    let url = `../../../db/data/images/${this.props.image}`;
    this.setState({imageLocation: url})
    //return url;
  }
  render() {
    return (
      <RenderDiv url={this.state.imageLocation} isSelected={this.props.isSelected} onClick={this.handleClick}>
      </RenderDiv>
    );
  }
}

export default ThumbNail;