import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from '../components/NoteList/SearchBar';
import { searchNotes } from '../slices/note';
import { Shortcuts } from '../utils/enums';
import { useKey } from '../utils/hooks';

export const NoteList: React.FC = () => {
    // Dispatch
    const dispatch = useDispatch();
    const _searchNotes = (searchValue: string) => dispatch(searchNotes(searchValue));

    // Refs
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // Handlers
    const focusSearchHandler = () => searchRef.current.focus();

    // Hooks
    useKey(Shortcuts.SEARCH, () => focusSearchHandler());

    return (
        <aside className="note-sidebar">
            <div className="note-sidebar-header">
                <SearchBar searchRef={searchRef} searchNotes={_searchNotes} />
            </div>
        </aside>
    )
}