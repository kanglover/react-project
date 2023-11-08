import { AuthState } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    currentUser: {},
    isAuthenticated: false,
    error: '',
    loading: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.loading = true
        },

        loginSuccess: (state, { payload }: PayloadAction<any>) => {
            state.currentUser = payload.currentUser;
            state.isAuthenticated = true;
            state.loading = false;
        },

        loginError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.isAuthenticated = false;
            state.loading = false;
        }
    }
});

export const {login, loginSuccess, loginError} = authSlice.actions;

export default authSlice.reducer;