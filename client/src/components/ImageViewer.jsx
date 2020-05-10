import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';
import fetchImageLocation from '../helper.js';
import ColorList from './ColorList.jsx';
import $ from 'jquery';

const Images = styled.div`
  height: 700px;
  width: 100%;
  min-width: 600px;
  flex-grow: 3;
  background-color: #ECEFF1;
  vertical-align: middle;
  display: flex;
  flex-flow: column;
  align-content: stretch;
`;
const StyledDiv = styled.div`
  z-index: 0;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  background-color: #ECEFF1;

  width: 100%;
  text-align: center;
  justify-content: space-around;
`
const StyledImg = styled.div`
  z-index: 0;
  height: 620px;
  width: 800px;
  flex-shrink: 0;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: auto 700px;
  background-position: center;
  left: auto;
`;

const RenderDiv = styled.div`
  flex-flow: column no-wrap;
  min-height: 700px;
  width: auto;
  min-width: 700px;
  flex-grow: 3;
  justify-content: space-bewteen;
`;

const Previous = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid gray;
  margin-left: 20px;
  background: rgba(255, 255, 255, 0.3);
  &:hover {
    background: rgba(255, 255, 255, 1);
  }:
`;

const Next = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  background: white;
  border: 1px solid gray;
  margin-right: 20px;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  &:hover {
    background: rgba(255, 255, 255, 1);
  }:
`;

const StyledPath = styled.path`
  padding: 0px;
  margin-top: 0px;
  stroke-linecap: square;
  stroke-width: 2px;
  d: path(${props => props.d});
`

const Slider = styled.div`
  height: 620px;
  width: 800px;
  display: flex;
  overflow-x: hidden;
`;

class ImageViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      indexOfSelected: 0, // first image selected by default
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  // Update state and render if props change
  // If new color is selected, display first pic for that color (index = 0)
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color) {
      this.setState({indexOfSelected:0}, () => {this.scroll(0)})
    }
  }

  // Go back to previous image on click
  previous() {
    // if already at first image, loop around and go to last image
    if (this.state.indexOfSelected === 0) {
      this.setState({
        indexOfSelected: this.props.product.colors[this.props.color].images.length - 1
      }, () => {this.scroll(this.state.indexOfSelected)});
    } else {
      this.setState({
        indexOfSelected: this.state.indexOfSelected - 1
      }, () => {this.scroll(this.state.indexOfSelected)});
    }
  }

  // Go forward to next image on click
  next() {
    //if already at last image, loop around and go to first image
    if (this.state.indexOfSelected === this.props.product.colors[this.props.color].images.length - 1) {
      this.setState({
        indexOfSelected: 0
      }, () => {this.scroll(this.state.indexOfSelected)});
    } else {
      this.setState({
        indexOfSelected: this.state.indexOfSelected + 1
      }, () => {this.scroll(this.state.indexOfSelected)});
    }
  }
  // Click handler is passed to child component ThumbNailList
  // and will be called by child component
  handleClick(index, url) {
    this.setState({indexOfSelected: index}, () => {this.scroll(index)});
  }

  scroll(index){
    document.getElementById("Slider").scroll({
      left: 800 * index,
      behavior: 'smooth'
    });
  }

  handleColorChange(color){
    this.props.handleColorChange(color);
  }

  render() {
    let slides =[];
    for (let i = 0; i < this.props.product.colors[this.props.color].images.length; i++) {
      let image = this.props.product.colors[this.props.color].images[i];
      let url = fetchImageLocation(image);
      slides.push(<StyledImg key={i} image={url}></StyledImg>);
    }
    return (
      <RenderDiv>
        <Images>
          <StyledDiv>
            <Previous onClick={this.previous}>
              <svg height="20px" width="25px">
                <g fill="none" stroke="black" strokeMiterlimit="10">
                  <StyledPath d="M6.4 17l-5-5 5-5M2 12h22"></StyledPath>
                </g>
              </svg>
            </Previous>
            <Slider id="Slider">
              {slides}
            </Slider>
            <Next  onClick={this.next}>
              <svg height="20px" width="25px">
                <g fill="none" stroke="black" strokeMiterlimit="10">
                  <StyledPath d="M17.59 7l5 5-5 5M0 12h22"></StyledPath>
                </g>
              </svg>
            </Next>
          </StyledDiv>
          <ThumbNailList images={this.props.product.colors[this.props.color].images} indexOfSelected={this.state.indexOfSelected} handleClick={this.handleClick}/>
        </Images>
        <ColorList product={this.props.product} color={this.props.color} handleColorChange={this.handleColorChange}/>
      </RenderDiv>
    );
  }
}

export default ImageViewer;

