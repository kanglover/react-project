import React from 'react';
import Page from './Page';
import VoteContainer from '../containers/Vote';

const Vote = () => {
    const pageTitle = () => {
        return 'Vote | reactGo';
    };

    const pageMeta = () => {
        return [
            {
                name: 'description',
                content: 'A reactGo example of a voting page',
            },
        ];
    };

    const pageLink = () => {
        return [];
    };

    const getMetaData = () => ({
        title: pageTitle(),
        meta: pageMeta(),
        link: pageLink(),
    });

    return (
        <Page {...getMetaData()}>
            <VoteContainer />
        </Page>
    );
};

export default Vote;
