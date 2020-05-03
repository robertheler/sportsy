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
    console.log(this.state.urlOfSelected);
    return (
      <RenderDiv>
        <ThumbNailList images={this.state.images} selectedImage={this.state.selectedImage} updateImage={this.updateImage}/>
        <StyledDiv><StyledImg image={this.state.urlOfSelected}></StyledImg></StyledDiv>
      </RenderDiv>
    );
  }
}

export default ImageViewer;