import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNail from './ThumbNail.jsx';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  position: relative;
  top: 100px;
  overflow: hidden;
  z-index: 1000;
  margin-right: 10px;
`;

class ThumbNailList extends Component {
  constructor(props){
    super(props);
    this.state = {
      indexOfSelected: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, url) {
    this.setState({indexOfSelected: index});
    this.props.updateImage(index, url);
  }

  render() {
    let arrayOfThumbNails = [];
    for (let i = 0; i < this.props.images.length; i++) {
      if(i === this.state.indexOfSelected) {
        arrayOfThumbNails.push(<ThumbNail key={i} index={i} image={this.props.images[i]} handleClick={this.handleClick} isSelected={true}/>)
      } else {
        arrayOfThumbNails.push(<ThumbNail key={i} index={i} image={this.props.images[i]} handleClick={this.handleClick} isSelected={false}/>)
      }
    }

    return (
      <RenderDiv>
        {arrayOfThumbNails}
      </RenderDiv>
    );
  }
}

export default ThumbNailList;