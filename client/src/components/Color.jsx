import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
`;

const StyledImage = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 1px solid red
`;

const StyledSelectedTick = styled.h1`

`;

class Color extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product,
      color: this.props.color,
      isSelected: false
    }
  }
  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product || this.props.color !== prevProps.color || this.props.isSelected !== prevProps.isSelected) {
      this.setState({
        product: this.props.product,
        color: this.props.color,
        isSelected: this.props.isSelected
      })
    }
  }

  render() {
    return (
      <RenderDiv>
        <StyledImage/>
      </RenderDiv>
    );
  }
}

export default Color;