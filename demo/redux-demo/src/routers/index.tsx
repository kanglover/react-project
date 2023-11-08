import { lazy } from "react";
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Detail = lazy(() => import('../pages/detail'));
const TodoList = lazy(() => import('../pages/todo'));
const Counter = lazy(() => import('../pages/counter'));
const Count = lazy(() => import('../pages/countReducer'));

export type RouterType = {
    path: string;
    component?: any;
    root: string[];
    exact?: boolean;
}[];

const Routers: RouterType = [
    {
        path: '/home',
        component: <Home/>,
        root: []
    },
    {
        path: '/todoList',
        component: <TodoList/>,
        root: []
    },
    {
        path: '/counter',
        component: <Counter/>,
        root: []
    },
    {
        path: '/count',
        component: <Count/>,
        root: []
    },
    {
        path: '/detail',
        component: <Detail/>,
        root: []
    },
    {
        path: '/',
        component: <Navigate to="/home" />,
        root: []
    }
];

export default Routers;
