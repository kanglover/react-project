import { ActionButton } from '../components/AppSidebar/ActionButton';

export const AppSidebar: React.FC = () => {
    const newNoteHandler = () => {

    }


    return (
        <aside className="app-sidebar">
            <ActionButton
                handler={newNoteHandler}
                label="Create new note"
                text="New note"
            />
        </aside>
    )
}