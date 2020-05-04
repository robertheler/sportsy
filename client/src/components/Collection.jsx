import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
`;

const StyledCollection = styled.div`
  font-size: 13px;
  font-family: AdihausDIN,Helvetica;
  font-weight: 400;
  margin: 10 0 2px 0;
  color: #767677;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledProductName = styled.h1`
  font-size: 30px;
  font-family: AdineuePRO,Helvetica;
  font-weight: 600;
  margin: 0 0 7px 0;
  word-wrap: normal;
  text-transform: uppercase;
`;

class Collection extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: this.props.product
    }
  }
  // Update state and render if props change
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      this.setState({
        product: this.props.product,
      })
    }
  }

  render() {
    return (
      <RenderDiv>
        <StyledCollection>{this.state.product.collection_name}</StyledCollection>
        <StyledProductName>{this.state.product.name}</StyledProductName>
      </RenderDiv>
    );
  }
}

export default Collection;