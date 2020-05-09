import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Offers = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
  border-top: 1px solid #ebedee;
`
const Span = styled.span`
  flex-flow: 300px;
  cursor: pointer;
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 14px;
  color: #363738;
  padding: 10px 20px;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`
const Nav = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-end;
`
const NavItem = styled.span`
  display: flex;
  cursor: pointer;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  color: #363738;
  padding: 10px 20px;
  &:hover {
    text-decoration: underline;
  }
  align-items: center;
`
const MenuDiv = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  padding-left: 50px;
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  height: 40px;
`;
const MenuItem = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  cursor: pointer;
  padding: 10px 20px;
  text-transform: uppercase;
  &:hover {
    border-bottom: 3px solid black;
  }
  font-size: 14px;
  font-weight: ${props=> props.fontWeight || 400};
  letter-spacing: 2px;
  box-sizing: border-box;
`;
const MainDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 90%;
  `;
const HeaderDiv = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-end;;
  align-items: center;
  `;
const Search = styled.span``;
function Header(props) {
  return(
    <Fragment>
      <HeaderDiv>
      <img src="../../style/adidas.png" height="60px"></img>
      <MainDiv>
        <Nav>
          <NavItem>also visit <img src="../../style/reebok.png" height="17px"></img></NavItem>
          <NavItem>help</NavItem>
          <NavItem>exchanges & returns</NavItem>
          <NavItem>order tracker</NavItem>
          <NavItem>join creators club</NavItem>
          <NavItem>creators club</NavItem>
          <NavItem>login</NavItem>
        </Nav>
        <MenuDiv>
          <Menu>
            <MenuItem fontWeight="700">men</MenuItem>
            <MenuItem fontWeight="700">women</MenuItem>
            <MenuItem fontWeight="700">kids</MenuItem>
            <MenuItem>sports</MenuItem>
            <MenuItem>brands</MenuItem>
            <MenuItem>release dates</MenuItem>
          </Menu>
          <Search>
          </Search>
        </MenuDiv>
      </MainDiv>
      </HeaderDiv>
      <Offers>
        <Span>30% off select sneakers | code: style</Span>
        <Span>your purschases suppport the covid-19 response</Span>
        <Span>free shipping over $49 and free 90 day returns</Span>
      </Offers>
    </Fragment>
  )
}

export default Header;
