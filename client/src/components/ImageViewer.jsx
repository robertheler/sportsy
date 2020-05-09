import React, { Component } from 'react';
import styled from 'styled-components';
import ThumbNailList from './ThumbNailList.jsx';
import fetchImageLocation from '../helper.js';
import ColorList from './ColorList.jsx';

const Images = styled.div`
  height: 700px;
  width: auto;
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
  width:75%;
  background-color: #ECEFF1;
  justify-content: center;
  width: 100%;
  text-align: center;
`
const StyledImg = styled.div`
  z-index: 0;
  height: 620px;
  width: 85%;
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
  min-width: 600px;
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
  border: 1px solid black;
  margin-left: 20px;
`;

const Next = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  background: white;
  border: 1px solid black;
  margin-right: 20px;
  justify-content: center;
`;

const StyledPath = styled.path`
  padding: 0px;
  margin-top: 0px;
  stroke-linecap: square;
  stroke-width: 2px;
  d: path(${props => props.d});
`

class ImageViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      indexOfSelected: 0, // first image selected by default
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  // Update state and render if props change
  // If new color is selected, display first pic for that color (index = 0)
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color) {
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

  handleColorChange(color){
    this.props.handleColorChange(color);
  }


  render() {
    let url = this.props.product.colors[this.props.color].images[this.state.indexOfSelected];
    return (
      <RenderDiv>
        <Images>
          <StyledDiv>
            <Previous >
              <svg height="20px" width="30px">
                <g fill="none" stroke="black" strokeMiterlimit="10">
                  <StyledPath d="M6.4 17l-5-5 5-5M2 12h22"></StyledPath>
                </g>
              </svg>
            </Previous>
            <StyledImg image={fetchImageLocation(url)}></StyledImg>
            <Next>
              <svg height="20px" width="30px">
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

