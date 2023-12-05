import { MenuOptions } from '@/interface';
import { SerializedError } from '@reduxjs/toolkit';

export interface UserState {
    name: string;
    auth: string;
    token: string;
    permissions: string[];
}

export interface MenuState {
    isCollapse: boolean;
    menuList: MenuOptions[];
    loading: boolean;
    error: SerializedError | null;
}
