import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
`;

const StyledColorNames = styled.div`
  font-size: 11px;
  font-family: AdihausDIN,Helvetica;
  font-weight: 400;
  margin: 10 0 2px 0;
  color: #767677;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledHeader = styled.h1`
  font-size: 20px;
  font-family: AdineuePRO,Helvetica;
  font-weight: 600;
  margin: 0 0 7px 0;
  word-wrap: normal;
  text-transform: uppercase;
`;

class AvailableColors extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: this.props.color,
    }
  }

  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color) {
      this.setState({
        product: this.props.product,
        color: this.props.color,
      })
    }
  }

  render() {
    return (
      <RenderDiv>
        <StyledHeader>Available colors</StyledHeader>
        <StyledColorNames>{this.state.product.colors[this.state.color].name}</StyledColorNames>
      </RenderDiv>
    );
  }
}

export default AvailableColors;