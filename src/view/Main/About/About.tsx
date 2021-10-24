import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from '../../../styles/global';

interface Avatar {
  avatar: string
}

const About: React.FC<Avatar> = ({ avatar }) => {

  const skillsFrontend = [
    { logo: "HTML5", color: "E34F26" },
    { logo: "CSS3", color: "1572B6" },
    { logo: "Sass", color: "CC6699" },
    { logo: "JavaScript", color: "F7DF1E" },
    { logo: "jQuery", color: "2331eb" },
    { logo: "React", color: "61DAFB" },
    { logo: "Redux", color: "764ABC" },
    { logo: "styled-components", color: "DB7093", name: "styled--components" }
  ]

  const skillsBackend = [
    { logo: "Node.js", color: "" },
    { logo: "Express", color: "FFFFFF" },
    { logo: "TypeScript", color: "3178C6" },
    { logo: "MongoDB", color: "47A248" }
  ]

  const skillsTools = [
    { logo: "Firebase", color: "FFCA28" },
    { logo: "Heroku", color: "6432a8" },
    { logo: "Git", color: "F05032" },
    { logo: "visual studio code", color: "007ACC", name: "VS Code" },
    { logo: "Postman", color: "e35b17" },
    { logo: "Gatsby", color: "6115a3" }
  ]

  return (
    <ThemeConsumer>
      {theme =>
        <Box id='about' >
          <Title>About</Title>

          <Content>
            <Image><img src={avatar} alt='avatar' /></Image>

            <Details>
              <p>I have completed my bachelor's degree in Electrical and Electronics Engineering, but my passion is coding! <br></br>
                I'm a graduate of Full Stack Development course searching for my first opportunity as a developer. <br></br>
                I’m coding for at least 3 hours every day. <br></br>
                I come with a hands-on approach. <br></br>
                I’m a quick learner. <br></br><br></br>
                Skills:
              </p>

              <Icons>
                {skillsFrontend.map(badge => (<img src={`https://img.shields.io/badge/${badge.name || badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
                {skillsBackend.map(badge => (<img src={`https://img.shields.io/badge/${badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
                {skillsTools.map(badge => (<img src={`https://img.shields.io/badge/${badge.name || badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
              </Icons>
            </Details>
          </Content>
        </Box >
      }
    </ThemeConsumer>
  );
};
export default About;


const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  p {
    font-size: 1.5rem;
    text-align: left;
  }

  @media only screen and (max-width: 1012px) {
      p {
        font-size: 1rem;
      }
    }

  @media only screen and (max-width: 812px) {
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1rem;
        text-align: center;
      }
    }
`;

const Image = styled.div`
  margin-left: 1rem;
  
  img {
      border-radius: 50%;
      width: 20rem;
      height: 20rem;

      @media only screen and (max-width: 812px) {
        width: 15rem;
        height: 15rem;
      }
  }
`;

const Details = styled.div`
  img {
    margin: 5px;
  }
`;

const Icons = styled.div`
  text-align: center;
`;


