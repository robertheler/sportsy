import React, { Component } from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
  font-weight: 400;
  font-family: AdihausDIN,Helvetica;
  font-size: 11px;
  word-wrap: normal;
  margin: 0 0 0 0;
  color: #767677;
  word-wrap: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const LearnMore = styled.a`
  color: black;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  cursor: pointer;
`

const StyledOffer = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 30px auto;
  &:hover {
    background: black;
    color: white;
  }
  margin: 10px;
`
const StyledPath = styled.path`
  padding: 0px;
  margin-top: 0px;
  stroke-linecap: square;
  d: path(${props => props.d});
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`
class Offers extends Component {
  constructor(props){
    super(props);
  }

  showModal(){
    console.log("Modal goes here");
  }
  render() {
    return (
      <RenderDiv>
        <StyledOffer>
          <StyledDiv>
            <svg height="20px" width="30px">
              <g fill="none" stroke="currentColor" strokeMiterlimit="10">
                <circle cx="9.5" cy="9.5" r="6" fill="none" stroke="currentColor"></circle>
                <circle fill="currentColor" cx="9.5" cy="6.5" r=".65"></circle>
                <StyledPath d="M9.5 8.5v4"></StyledPath>
              </g>
            </svg>
          </StyledDiv>
          <StyledDiv>WE WILL DONATE AN ADDITIONAL $2 TO THE COVID-19 SOLIDARITY RESPONSE FUND FOR WHO.</StyledDiv>
        </StyledOffer>
        <StyledOffer>
          <StyledDiv>
            <svg height="20px" width="30px">
              <g fill="none" stroke="currentColor" strokeMiterlimit="10">
                <StyledPath d="M13.42 13.5H9.5"></StyledPath>
                <StyledPath d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></StyledPath>
                <circle cx="8" cy="13" r="1.5"></circle>
                <circle cx="15" cy="13" r="1.5"></circle>
                <StyledPath d="M1.5 9.5h3m-2 2h2"></StyledPath>
              </g>
            </svg>
          </StyledDiv>
          <StyledDiv>FREE SHIPPING OVER $49 + FREE EXTENDED 90 DAY RETURNS & EXCHANGES.</StyledDiv>
        </StyledOffer>
        <StyledOffer>
          <StyledDiv>
            <svg height="20px" width="30px">
              <g fill="none" stroke="currentColor" strokeMiterlimit="10">

                <StyledPath d="M2.5 10.5l4 4 10-10"></StyledPath>
              </g>
            </svg>
          </StyledDiv>
          <StyledDiv>BUY NOW, PAY OVER TIME WITH PAYPAL CREDIT</StyledDiv>
        </StyledOffer>
      </RenderDiv>
    );
  }
}

export default Offers;