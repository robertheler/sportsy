import React, { Component } from 'react';
import styled from 'styled-components';
import Color from './Color.jsx'

const RenderDiv = styled.div`
  margin-top 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


class ColorList extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: this.props.color,
    }
  }

  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color){
      this.setState({
        product: this.props.product,
        color: this.props.color,
      })
    }
  }

  // Fetches url of selected image
  fetchImageLocation(image){
    let url = `https://adidasproducts.s3-us-west-1.amazonaws.com/images/${image}`;
    return url;
  }

  render() {
    let arrayOfColors = [];
    for (let i = 0; i < this.state.product.colors.length; i++) {
      // currently selected ThumbNail is passed prop isSelected = true
      // because it needs to be styled differently
      if(i === this.state.color) {
        arrayOfColors.push(<Color key={i} color={i} product={this.state.product} isSelected={true}
          url={this.fetchImageLocation(this.state.product.colors[i].images[0])}/>)
      } else {
        arrayOfColors.push(<Color key={i} color={i} product={this.state.product} isSelected={false}
          url={this.fetchImageLocation(this.state.product.colors[i].images[0])}/>)
      }
    }

    return (<RenderDiv>{arrayOfColors}</RenderDiv>);
  }
}

export default ColorList;