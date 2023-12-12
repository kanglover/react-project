import { lazy } from 'react';
import App from '../containers/App';

const Vote = lazy(() => import('../pages/Vote'));
const LoginOrRegister = lazy(() => import('../pages/LoginOrRegister'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

interface RoutersProps {
    path?: string;
    element?: React.ReactNode;
    children?: RoutersProps[];
}

const childRoutes: RoutersProps[] = [
    {
        path: '/',
        element: <Vote />,
    },
    {
        path: '/login',
        element: <LoginOrRegister />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

const routes: RoutersProps[] = [
    {
        path: '/',
        element: <App />,
        children: childRoutes
    }
]


export default routes;
