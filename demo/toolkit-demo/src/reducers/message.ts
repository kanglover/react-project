import { createSlice } from '@reduxjs/toolkit';
import { logIn, signUp } from '../actions/users';

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message: '',
        type: 'SUCCESS',
    },
    reducers: {
        dismissMessage(state) {
            state.message = '';
            state.type = 'SUCCESS';
        },
    },
    extraReducers: builder =>
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.message = action.payload;
                state.type = 'SUCCESS';
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.message = action.payload;
                state.type = 'SUCCESS';
            }),
});

export default messageSlice.reducer;
export const { dismissMessage } = messageSlice.actions;