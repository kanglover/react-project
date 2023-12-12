import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Page from './Page';
import { link, meta, title } from './assets';
import routes from '../router';

const App = () => (
    <Page title={title} meta={meta} link={link}>
        <Suspense fallback={<div>Loading....</div>}>
            {useRoutes(routes)}
        </Suspense>
    </Page>
);

export default App;
