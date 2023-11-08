
interface SearchBarProps {
    searchRef: React.MutableRefObject<HTMLInputElement>;
    searchNotes: (searchValue: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({searchRef, searchNotes}) => {
    return (
        <input
            type="search"
            ref={searchRef}
            onChange={(event) => {
                event.preventDefault();
                searchNotes(event.target.value)
            }}
            placeholder="Search for notes"
        />
    )
}