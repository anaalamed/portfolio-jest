import React, { useState } from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Toggle from './Toogle';
import VerticalNav from './VerticalNav';

interface Props {
  setTheme(): any
}

const TopBar: React.FC<Props> = ({ setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <Header >
      <Link offset='140' href='#front'><Logo src="logo.png"></Logo></Link>

      <Nav>
        <li><Link offset='140' href='#about'>About</Link></li>
        <li><Link offset='140' href='#projects'>Projects</Link></li>
        <li><Link href='#contact'>Contact</Link></li>
        <li className='toggle'><Toggle setTheme={setTheme}></Toggle></li>
      </Nav>

      <VerticalNav open={open} setOpen={setOpen} setTheme={setTheme}></VerticalNav>
    </Header >
  );
};
export default TopBar;


const Header = styled.header`
  background: ${props => props.theme.topBar};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 0.4rem 2rem;
  width: 100%;

  @media only screen and (max-width: 812px) {
     padding: 0.3rem;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 7rem;

  @media only screen and (max-width: 812px) {
     width: 6rem;
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media only screen and (max-width: 812px) {
    display: none;
  }  

  .toggle {
    margin-top: 0.65rem;
  }
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 500;

  :hover {
    color: ${props => props.theme.body}
  }

  @media only screen and (max-width: 812px) {
    font-size: 1.3rem;
  }
`;
