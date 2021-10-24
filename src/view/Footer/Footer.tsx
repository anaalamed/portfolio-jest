import React from "react";
import styled from "styled-components";

import { Title } from '../../styles/global';
import Icons from '../Icons';

const Contact: React.FC = () => {

    return (
        <Box id="contact">
            <Title>Ana Levit</Title>
            <p>anaalamed@gmail.com</p>
            <Icons></Icons>
        </Box>
    );
};
export default Contact;

const Box = styled.footer`
  background: ${props => props.theme.topBar};
  text-align: center;
  padding: 2rem 0 0 0;
  
  h1 {
      margin: auto 0;
  }

  h2 {
      font-size: 1.5rem;
  }
`;
