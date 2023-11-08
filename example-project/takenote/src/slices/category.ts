import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryItem, CategoryState } from '../types';

const _swapCategories = (categories: CategoryItem[], categoryId: number, destinationId: number) => {
    const newCategories = [...categories];
    newCategories.splice(categoryId, 1);
    newCategories.splice(destinationId, 0, categories[categoryId]);
    return newCategories;
}

export const initialState: CategoryState = {
    categories: [],
    editingCategory: {
        id: '',
        tempName: '',
    },
    error: '',
    loading: true,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, { payload }: PayloadAction<CategoryItem>) => {
            state.categories.push(payload);
        },

        importCategories: (state, { payload }: PayloadAction<CategoryItem[]>) => {
            const categoryNames = new Map<string, string>();
            state.categories.forEach(({ name }: { name: string }) => categoryNames.set(name, name));
            payload.forEach(item => {
                if (!categoryNames.has(item.name)) {
                    state.categories.push(item);
                }
            })
        },

        swapCategories: (
            state,
            { payload }: PayloadAction<{ categoryId: number; destinationId: number }>
        ) => {
            state.categories = _swapCategories(
                state.categories,
                payload.categoryId,
                payload.destinationId
            );
        },

        loadCategories: (state) => {
            state.loading = true;
        },
    }
});

export const {
    addCategory,
    importCategories,
    swapCategories,
    loadCategories
} = categorySlice.actions;

export default categorySlice.reducer;
