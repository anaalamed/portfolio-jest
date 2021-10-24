import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from './styles/theme';
import { useDarkMode } from './hooks/useDarkMode';
import TopBar from './view/TopBar/TopBar'
import Main from './view/Main/Main'
import Contact from './view/Footer/Footer';
import Hero from './view/Hero/Hero';

import { GlobalStyles } from "./styles/global";

function App(): React.ReactNode {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <TopBar setTheme={toggleTheme}></TopBar>
      <Hero ></Hero>
      <Main ></Main>
      <Contact ></Contact>

      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  );
}

export default App;