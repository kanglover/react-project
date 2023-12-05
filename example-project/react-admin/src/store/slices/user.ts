import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../interface';
import { login, LoginParams } from '@/api/login';

const userState: UserState = {
    name: '',
    auth: '',
    token: '',
    permissions: []
}

export const logIn = createAsyncThunk<any, LoginParams, { rejectValue: string }>(
    'user/login',
    async (data, {dispatch}) => {
        const response = await login(data);
        dispatch(setToken(response.token));
        return 'logged in';
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setToken: (state, { payload } : PayloadAction<string>) => {
            state.token = payload;
        }
    }
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;