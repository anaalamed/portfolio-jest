import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,body,#root{min-height:100%}

  body {
    background: ${({ theme }) => theme.body};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height:100%;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
  }

  .toggle {
    margin-top: 0.4rem;
  }

  h1 {
    color: white;
  }

  /*  -------------------------- toggle ------------------------------  */
  .react-toggle-track {
    background: ${props => props.theme.body};
  }

  .react-toggle--checked .react-toggle-track {
    background: ${props => props.theme.body};
  }

  .react-toggle-track-check, .react-toggle-track-x  {
    /* display: none; */
    /* font-size: 1rem; */
    margin-bottom: 0.6rem;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: ${props => props.theme.button};
  }

  /*  -------------------------- tooltip ------------------------------  */

  .__react_component_tooltip {
    background: ${props => props.theme.body};
  }

  /*  -------------------------- pagination ------------------------------  */
  .ant-pagination li {
    background: ${props => props.theme.topBar};
    border-radius: 50%;
    margin: 3rem 0.5rem ;
    border: none;
    font-weight: bold;
    font-size: 1rem;

    a {
      color: white;

      :hover {
        color: ${props => props.theme.button};
      }
    }
  }

  .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
    background: ${props => props.theme.topBar};  
    color: white;
    border-radius: 50%;
    border: none;
    :hover {
          color: ${props => props.theme.button};
        }
    }
  `

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 4px 4px 2px #585858;
`;