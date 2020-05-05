import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';

const RenderDiv = styled.div`
  min-height: 700px;
  flex-basis: 800px;
  flex-grow: 3;
  width: auto;
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
      images: this.props.images, //array of image file names
      indexOfSelected: 0, // first image selected by default
      urlOfSelected: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // Fetch url of first image
  componentDidMount() {
    this.fetchImageLocation(this.state.images[this.state.indexOfSelected]);
  }

  // Fetches url of selected image
  fetchImageLocation(image){
    let url = `https://adidasproducts.s3-us-west-1.amazonaws.com/images/${image}`;
    this.setState({urlOfSelected: url})
  }

  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        images: this.props.images,
      })
      this.fetchImageLocation(this.props.images[0]);
    }
  }

  // Click handler is passed to child component ThumbNailList
  // and will be called by child component
  handleClick(index, url) {
    this.setState({indexOfSelected: index, urlOfSelected: url});
  }

  render() {
    return (
      <RenderDiv>
        <ThumbNailList images={this.state.images} selectedImage={this.state.selectedImage} handleClick={this.handleClick}/>
        <StyledDiv><StyledImg image={this.state.urlOfSelected}></StyledImg></StyledDiv>
      </RenderDiv>
    );
  }
}

export default ImageViewer;