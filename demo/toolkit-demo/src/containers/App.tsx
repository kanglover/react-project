import React, { FC } from 'react';
import { Global } from '@emotion/react';

import { AppWrapper, global } from '../css/main';
import Navigation from './Navigation';
import Message from './Message';
import { Outlet } from 'react-router-dom';

const App: FC = () => (
    <AppWrapper>
        <Global
            styles={global}
        />
        <Navigation />
        <Message />
        <Outlet />
    </AppWrapper>
);

export default App;
