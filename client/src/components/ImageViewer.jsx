import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';

const RenderDiv = styled.div`
  min-height: 700px;
  flex-basis: 800px;
  flex-grow: 3;
  width: auto;
  background-color: #ECEFF1;
  background: url(${props => props.url});
  background-size: auto 700px;
  background-repeat: no-repeat;
  padding-left: 20px;
  vertical-align: middle;
`;

class ImageViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images,
      indexOfSelected: 0,
      urlOfSelected: ''
    }

    this.updateImage = this.updateImage.bind(this);
  }

  updateImage(index, url) {
    this.setState({indexOfSelected: index, urlOfSelected: url});
  }
  render() {
    return (
      <RenderDiv url={this.state.urlOfSelected}>
        <ThumbNailList images={this.state.images} selectedImage={this.state.selectedImage} updateImage={this.updateImage}/>
      </RenderDiv>
    );
  }
}

export default ImageViewer;