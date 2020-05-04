import React, { Component } from 'react';
import styled from 'styled-components';

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
    this.state = {
      image: this.props.image,
      isSelected: this.props.isSelected,
      index: this.props.index,
      imageLocation: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.image !== prevProps.image) {
      this.setState({
        image: this.props.image,
      })

      this.fetchImageLocation(this.props.image);
    }
  }

  // Calls the click handler function of the parent component
  // passing the index and url of the clicked ThumbNail
  handleClick(event) {
    this.props.handleClick(this.state.index, this.state.imageLocation);
  }

  componentDidMount() {
    this.fetchImageLocation(this.state.image);
  }

  // Fetches url of selected image
  fetchImageLocation(image){
    let url = `../../../db/data/images/${image}`;
    this.setState({imageLocation: url})
  }

  render() {
    return (
      <RenderDiv url={this.state.imageLocation} isSelected={this.props.isSelected} onClick={this.handleClick}>
      </RenderDiv>
    );
  }
}

export default ThumbNail;