// Items
export interface CategoryItem {
    id: string;
    name: string;
    draggedOver: boolean;
}

export interface GithubUser {
    [anyProp: string]: any;
}

export interface NoteItem {
    id: string
    text: string
    created: string
    lastUpdated: string
    category?: string
    scratchpad?: boolean
    trash?: boolean
    favorite?: boolean
}

// State
export interface AuthState {
    loading: boolean;
    currentUser: GithubUser;
    isAuthenticated: boolean;
    error?: string;
}

export interface CategoryState {
    categories: CategoryItem[];
    error: string;
    loading: boolean;
    editingCategory: {
        id: string;
        tempName: string;
    }
}

export enum Folder {
    ALL = 'ALL',
    CATEGORY = 'CATEGORY',
    FAVORITES = 'FAVORITES',
    SCRATCHPAD = 'SCRATCHPAD',
    TRASH = 'TRASH',
}

export interface NoteState {
    notes: NoteItem[];
    activeFolder: Folder;
    activeNoteId: string;
    selectedNotesIds: string[];
    activeCategoryId: string;
    error: string;
    loading: boolean;
    searchValue: string;
}

export interface RootState {
    authState: AuthState;
    categoryState: CategoryState;
}