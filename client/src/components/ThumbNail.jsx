import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 52px;
  border: 1px solid gray;
  margin-bottom: 10px;
  box-sizing: border-box;
  background: url(${props => props.url});
  background-size: 100%;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

class ThumbNail extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageLocation: null
    }
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
      <RenderDiv url={this.state.imageLocation}>
      </RenderDiv>
    );
  }
}

export default ThumbNail;