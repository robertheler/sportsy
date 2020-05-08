import React, { Component } from 'react';
import styled from 'styled-components';

const RenderSpan = styled.span`
  font-weight: 700;
  font-style: bold;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  margin-right: 5px;
`;

class Stars extends Component {
  constructor(props){
    super(props);
  }

  //Render 5 stars filled appropriately
  render() {
    if (this.props.review > 4.5) {
      return (<RenderSpan>★ ★ ★ ★ ★</RenderSpan>);
    } else if (this.props.review > 3.5) {
      return (<RenderSpan>★ ★ ★ ★ ☆</RenderSpan>);
    } else if (this.props.review > 2.5) {
      return (<RenderSpan>★ ★ ★ ☆ ☆</RenderSpan>);
    } else if (this.props.review > 1.5) {
      return (<RenderSpan>★ ★ ☆ ☆ ☆</RenderSpan>);
    } else if (this.props.review > 0.5) {
      return (<RenderSpan>★ ☆ ☆ ☆ ☆</RenderSpan>);
    } else return (<RenderSpan>☆ ☆ ☆ ☆ ☆</RenderSpan>);
  }
}

export default Stars;