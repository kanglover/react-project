import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../services';
import { getTopics } from './topics';

const logIn = createAsyncThunk<
    any,
    { email: string; password: string },
    { rejectValue: string }
>('users/logIn', async (data, { dispatch, rejectWithValue }) => {
    try {
        await authService.login(data);
        dispatch(getTopics());
        return 'You have been successfully logged in';
    } catch (err) {
        return rejectWithValue('Oops! Invalid username or password');
    }
});

const signUp = createAsyncThunk<
    string,
    { email: string; password: string },
    { rejectValue: string }
>('users/signUp', async (data, { dispatch, rejectWithValue }) => {
    try {
        await authService.signUp(data);
        return 'You have successfully registered an account!';
    } catch (err) {
        return rejectWithValue('Oops! Something went wrong when signing up');
    }
});

const logOut = createAsyncThunk<string, void, { rejectValue: string }>(
    'users/logOut',
    async (data, { rejectWithValue }) => {
        try {
            const response = await authService.logOut();
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export { logOut, logIn, signUp };
