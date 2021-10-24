import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';

import { useWindowSize } from '../../../hooks/useWindowSize'
import { Title } from '../../../styles/global';
import PaginatonRender from './Pagination';
import InfiniteScrollRender from './InfiniteScrollRender';

interface Repos {
    [repo: number]: object
}

const Projects: React.FC<Repos> = ({ repos }) => {
    var windowSize = useWindowSize();
    var arrRepos = [...repos]; // clone without refference for infinite scroll

    // sort projects
    if (repos.length !== 0) {
        repos.sort(function (a, b) {
            var pr1 = a.order || 100;
            var pr2 = b.order || 100;
            return pr1 - pr2;
        });
    }

    return (
        <Box id='projects' >
            <Title>Projects</Title>

            {(windowSize[0] <= 812) ?
                (<InfiniteScrollRender repos={arrRepos}></InfiniteScrollRender>) :
                (<PaginatonRender repos={repos}></PaginatonRender>)
            }
        </Box>
    );
};
export default Projects;


const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
