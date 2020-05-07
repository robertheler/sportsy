import React, { Component, Fragment} from 'react';
import styled from 'styled-components';

const RenderDiv = styled.div`
font-size: 13px;
font-family: AdihausDIN,Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 400;
text-transform: uppercase;
display: flex;
justify-content: space-between;
`;

const StyledButton = styled.button`
  font-size: 13px;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  padding: 15px;
  text-transform: uppercase;
  height: 50px;
  width: 80%;
  background-color: black;
  color: white;
  vertical-align: middle;
  font-weight: 700;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`

const Favorite = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {

  };
  vertical-align: middle;
`

const StyledSvg = styled.svg`
margin: 0px;
height: 50px;
width: 50px;
padding: 14px;
&:hover {
  color: gray;
};
`

const StyledPath = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 2;
  d: path("M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z");
  pointer-events:all;
  &:hover {
    color: gray;
  };

`
class PurchaseButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorited: false
    }
  }

  render() {
    return (
        <RenderDiv>
          <StyledButton>
            <span>Add to bag</span>
            <span>⭢</span>
          </StyledButton>
          <Favorite>
            <StyledSvg>
              <StyledPath></StyledPath>
            </StyledSvg>
          </Favorite>
        </RenderDiv>

    );
  }
}

export default PurchaseButton;