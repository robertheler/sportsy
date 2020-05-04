import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  text-decoration: underline;
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 14px;
`;

class Review extends Component {
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
      <RenderDiv>{`Read all ${this.state.product.review_count} reviews`}
      </RenderDiv>
    );
  }
}

export default Review;