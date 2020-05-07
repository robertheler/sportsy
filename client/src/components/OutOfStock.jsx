import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-style: bold;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 20px;
  vertical-align: center;
`;

const StyledA = styled.a`
  margin-top: 2px;
  color: black;
  text-decoration: underline;
  vertical-align: center;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  cursor: pointer;
  padding: 2px;
`
const StyledPath = styled.path`
  stroke-linecap: square;
  d: path(${props => props.d});
`

const StyledSpan = styled.span`
  display: inline;
  vertical-align: center;
`

class OutOfStock extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <RenderDiv>
        <StyledSpan>
          <svg height="13px" width="30px">
            <g fill="none" stroke="black" strokeMiterlimit="10">
              <StyledPath d="M.5 6.5h18v6H.5z"></StyledPath>
              <StyledPath d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></StyledPath>
            </g>
          </svg>
          <StyledA>Size Guide</StyledA>
        </StyledSpan>
        <StyledA>Size out of stock?</StyledA>
      </RenderDiv>
    );
  }
}

export default OutOfStock;