import { lazy } from "react";
import { Navigate } from 'react-router-dom';

const Recoil = lazy(() => import('../pages/recoil'));

export type RouterType = {
    path: string;
    component?: any;
    root: string[];
    exact?: boolean;
}[];

const Routers: RouterType = [
    {
        path: '/recoil',
        component: <Recoil/>,
        root: []
    },
    {
        path: '/',
        component: <Navigate to="/recoil" />,
        root: []
    }
];

export default Routers;
