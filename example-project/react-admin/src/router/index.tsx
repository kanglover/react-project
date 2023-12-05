import Error404 from '@/page/error/404';
import type React from 'react';
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LazyLoad from './LazyLoad';
import Layout from '@/layout';
import Auth from './Auth';
import Login from '@/page/login';

interface MetaProps {
    title?: string
    auth?: boolean
    keepAlive?: boolean
}

interface RoutersProps {
    path?: string;
    element?: React.ReactNode;
    caseSensitive?: boolean;
    children?: RoutersProps[];
    meta?: MetaProps;
    isLink?: string;
}

const routers: RoutersProps[] = [
    {
        path: '/',
        element: <Navigate to="login" />
    },
    {
        path: '/404',
        element: <Error404 />
    },
    {
        path: '/login',
        element: <Login />
    }
];

function filterAsyncRouter(routes: RoutersProps[], routers: RoutersProps[]) {
    const viteModule = import.meta.glob('/src/page/**')
    routes.map((route: RoutersProps, index: number) => {
        let Module: JSX.Element;
        const { meta } = route;

        if (route.element === 'Layout') {
            routers[index] = {
                element: <Layout />
            };
        } else {
            const URL = `/src/page/${route.element}.tsx`;
            Module = LazyLoad(lazy(viteModule[URL] as any));
            const ele = meta?.auth ? <Auth>{Module}</Auth> : Module;
            routers[index] = {
                path: route.path,
                element: route.element ? ele : null
            };
        }

        if (route.children && route.children.length) {
            routers[index].children = filterAsyncRouter(
                route.children,
                routers[index].children || []
            );
        }
    })
    return routers;
}

function useLazy(routes: RoutersProps[]) {
    const tempRoutes: RoutersProps[] = [];
    filterAsyncRouter(routes, tempRoutes);
    routers.push(...tempRoutes);
    routers.push({
        path: '*',
        element: <Navigate to="/404" />
    })
}

const Router = () => useRoutes(routers);
export { Router, useLazy };