import React from 'react'
import styled from 'styled-components';
import { NavLink  } from 'react-router-dom';
import Nav from "./Nav"
const Header = () => {
  return<MainHeader>
    <NavLink to="/">
    <img  className='logo' src='./images/LOGO.avif' alt='My Logo Img'/>
    </NavLink>
    <Nav />
  </MainHeader>
};


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem; 
  background-color:;
  {background-color: ${({ theme }) => theme.colors.bg};}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;

  .logo {
  height:7rem;
  max-width:100px;
  }
`;
export default Header