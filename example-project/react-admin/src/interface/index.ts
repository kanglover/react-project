export interface Meta {
    title?: string;
    auth?: boolean;
    keepAlive?: boolean;
}

export interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    element?: string;
    isLink?: string;
    close?: boolean;
    meta?: Meta;
    children?: MenuOptions[];
}

export interface MenuProps {
    type: string;
    menuList: MenuOptions[];
}
