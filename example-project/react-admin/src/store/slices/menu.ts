import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuState } from '../interface';
import { getMenuList } from '@/api/menu';

const menuState: MenuState = {
    isCollapse: false,
    menuList: [],
    loading: false,
    error: null,
};

export const fetchMenuList = createAsyncThunk(
    'menu/fetchMenuList',
    async () => {
        const response = await getMenuList();
        return response;
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuState,
    reducers: {
        setMenuList: (state, action) => {
            state.menuList = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchMenuList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMenuList.fulfilled, (state, action) => {
            state.loading = false;
            state.menuList = action.payload;
        });
        builder.addCase(fetchMenuList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export const { setMenuList } = menuSlice.actions;
export default menuSlice.reducer;
