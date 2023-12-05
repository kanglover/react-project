import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './slices/user';
import menu from './slices/menu';

const rootReducer = combineReducers({
    user,
    menu
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
