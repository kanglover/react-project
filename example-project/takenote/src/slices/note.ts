import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Folder, NoteState } from "../types"


export const initialState: NoteState = {
    notes: [],
    activeCategoryId: '',
    activeFolder: Folder.ALL,
    activeNoteId: '',
    selectedNotesIds: [],
    searchValue: '',
    error: '',
    loading: true
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        searchNotes: (state, { payload }: PayloadAction<string>) => {
            state.searchValue = payload
        },
    }
});

export const {
    searchNotes
} = noteSlice.actions;

export default noteSlice.reducer;