import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';
import fetchImageLocation from '../helper.js';

const RenderDiv = styled.div`
  min-height: 700px;
  width: auto;
  min-width: 960px;
  flex-grow: 3;
  background-color: #ECEFF1;
  padding-left: 20px;
  vertical-align: middle;
  display: flex;
  flex-flow: row;
  align-content: stretch;
`;
const StyledDiv = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`
const StyledImg = styled.div`
  z-index: 0;
  height: 700px;
  width: 100%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: auto 700px;
  background-position: center;
  left: auto;
`;

class ImageViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      indexOfSelected: 0, // first image selected by default
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // Update state and render if props change
  // If new color is selected, display first pic for that color (index = 0)
  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        indexOfSelected:0,
      })
    }
  }

  // Click handler is passed to child component ThumbNailList
  // and will be called by child component
  handleClick(index, url) {
    this.setState({indexOfSelected: index});
  }

  render() {
    let url = this.props.images[this.state.indexOfSelected];
    return (
      <RenderDiv>
        <ThumbNailList images={this.props.images} indexOfSelected={this.state.indexOfSelected} handleClick={this.handleClick}/>
        <StyledDiv><StyledImg image={fetchImageLocation(url)}></StyledImg></StyledDiv>
      </RenderDiv>
    );
  }
}

export default ImageViewer;

