import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoMdMenu } from "react-icons/io";

import Toggle from './Toogle';

interface Props {
  setTheme(): any,
  open: boolean,
  setOpen(): any
}

const VerticalNav: React.FC<Props> = ({ setTheme, open, setOpen }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

  return (
    <RightNav ref={ref} >
      <MenuBtn onClick={() => setOpen(!open)} ><IoMdMenu /></MenuBtn>
      <NavVertical display={open} >
        <ButtonX onClick={() => setOpen(false)}>X</ButtonX>
        <li><Link offset='140' href='#about' onClick={() => setOpen(false)}>About</Link></li>
        <li><Link offset='140' href='#projects' onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link href='#contact' onClick={() => setOpen(false)}>Contact</Link></li>
        <li className="toggle"><Toggle setTheme={setTheme}></Toggle></li>
      </NavVertical>
    </RightNav>
  );
};
export default VerticalNav;


const RightNav = styled.div`
  display: none;

  @media only screen and (max-width: 812px) {
    display: block;
  }
`;

const MenuBtn = styled.button`
  display: none;
  float: right;
  background: transparent;
  border: none;
  font-size: 2rem;
  margin-right: 1rem;

  :hover {
    color: ${props => props.theme.body}
  }

  @media only screen and (max-width: 812px) {
    display: block;
  }
`;

const NavVertical = styled.ul`
  display: ${props => (props.display ? "block" : "none")};
  background: ${props => props.theme.topBar};
  list-style: none;
  position: absolute;
  top: 6.5rem;
  right: 0;
  border: 1px solid black;
  width: 100%;
  text-align: center;

  li {
    padding: 1rem;
  }

  .toggle {
    margin-right: 2rem;
  }
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;

  :hover {
    color: ${props => props.theme.body}
  }

  @media only screen and (max-width: 812px) {
    font-size: 1.3rem;
  }
`;

const ButtonX = styled.button`
  display: block;
  background: transparent;
  display: none;
  color: red;
  border: none;
  font-weight: bold;
  position: absolute;
  right: 2rem;

  :hover {
    font-size: 1.5rem;
    transition: 1s;
  }

  @media only screen and (max-width: 812px) {
    display: block;
  }
`;