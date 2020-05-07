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

  //TODO Render 5 stars filled appropriately
  render() {
    return (
      <RenderSpan>★ ★ ★ ★ ★</RenderSpan>
    );
  }
}

export default Stars;