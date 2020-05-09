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
  margin: 35px 0;
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
  position: relative;
  top: -2px;
  box-shadow: 2px 2px 0 0px white, 2px 2px 0 1px black;
  box-sizing: border-box;
  &:active {
    box-shadow: none;
  }

  cursor: pointer;
  &:hover {
    color: gray;
  }
  &:active {
    outline: none;
    transform: translateY(2px) translateX(2px);
    box-shadow: none;
  };
`
StyledButton.displayName = 'StyledButton'; // to be used in testing

const Favorite = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 1px solid gray;
    color: gray;
  };
  &:active {
    transform: translateY(2px) translateX(2px);
  }
  vertical-align: middle;
`

const StyledSvg = styled.svg`
  margin: 0px;
  height: 20px;
  width: 20px;
  padding: 14px;
  &:hover {
    color: gray;
  };
`

const StyledPath = styled.path`
  fill:${(props) => props.favorite === 'true'? '#e32b2b' : 'none'}};
  stroke: ${(props) => props.favorite === 'true'? '#e32b2b' : 'black'}};
  stroke-width: 2;
  strokeMiterlimit: 10;
  d: path("M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z");
  pointer-events: all;
`

const StyledPathArrow = styled.path`
  padding: 0px;
  margin-top: 0px;
  stroke-linecap: square;
  stroke-width: 2px;
  d: path(${props => props.d});
`
StyledPath.displayName = 'StyledPath';
class PurchaseButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorite: false
    }

    this.favorite =  this.favorite.bind(this);
  }

  purchase(event){
    event.currentTarget.blur();
  }

  favorite(event){
    this.setState({
      favorite: ! this.state.favorite
    })
  }

  render() {
    return (
        <RenderDiv>
          <StyledButton onClick={this.purchase}>
            <span>Add to bag</span>

              <svg height="20px" width="25px">
                <g fill="none" stroke="currentColor" strokeMiterlimit="10">
                  <StyledPathArrow d="M17.59 7l5 5-5 5M0 12h22"></StyledPathArrow>
                </g>
              </svg>

          </StyledButton>
          <Favorite onClick={this.favorite}>
            <StyledSvg>
            <StyledPath favorite={this.state.favorite.toString()}></StyledPath>
            </StyledSvg>
          </Favorite>
        </RenderDiv>

    );
  }
}

export default PurchaseButton;