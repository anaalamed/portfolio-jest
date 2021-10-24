import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'antd/dist/antd.css';

import Project from './ProjectCard';

interface Repos {
    [repo: number]: object
}

const PaginatonRender: React.FC<Repos> = ({ repos }) => {
    // console.log(repos);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6);

    // sort projects
    if (repos.length !== 0) {
        repos.sort(function (a, b) {
            var pr1 = a.order || 100;
            var pr2 = b.order || 100;
            return pr1 - pr2;
        });
    }

    // slice for pages
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    var currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    const handleChangePage = pageNumber => setCurrentPage(pageNumber);


    return (
        <>
            <AnchorLink href='#projects' offset='140'>
                <Pagination current={currentPage} onChange={handleChangePage} total={repos?.length || 0} pageSize={reposPerPage} />
            </AnchorLink>

            <Collection>
                {currentRepos?.map(repo =>
                    (<Project key={repo.id} name={repo.name} image_url={repo.image_url} description={repo.description} html_url={repo.html_url} updated_at={repo.updated_at} homepage={repo.homepage}   ></Project>) // key={repo.id} ts error
                )}
            </Collection>

            <AnchorLink href='#projects' offset='140'>
                <Pagination current={currentPage} onChange={handleChangePage} total={repos?.length || 0} pageSize={reposPerPage} />
            </AnchorLink>
        </>
    );
};
export default PaginatonRender;


const Collection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;