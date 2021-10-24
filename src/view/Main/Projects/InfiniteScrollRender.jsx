import React, { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import 'antd/dist/antd.css';

import Project from './ProjectCard';

const InfiniteScrollRender = ({ repos }) => {
    const [currentRepos, setCurrentRepos] = useState(repos.slice(0, 5));
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (repos.length === 0) {
            setHasMore(false);
        }

        setTimeout(() => {
            setCurrentRepos(currentRepos.concat(repos.slice(0, 5)))
            repos.splice(0, 5);
        }, 1500);
    };

    return (
        <InfiniteScroll
            dataLength={currentRepos.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
        >
            {currentRepos?.map(repo =>
                (<Project key={repo.id} name={repo.name} image_url={repo.image_url} description={repo.description} html_url={repo.html_url} updated_at={repo.updated_at} homepage={repo.homepage}   ></Project>) // key={repo.id} ts error
            )}
        </InfiniteScroll>
    );
};
export default InfiniteScrollRender;
