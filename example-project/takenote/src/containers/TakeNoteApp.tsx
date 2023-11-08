import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TempStateProvider } from '../contexts/TempStateContext';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { loadCategories, swapCategories } from '../slices/category'
import { AppSidebar } from './AppSidebar';
import { NoteList } from './NoteList';


export const TakeNoteApp: React.FC = () => {
    const dispatch = useDispatch();
    const _swapCategories = (categoryId: number, destinationId: number) => dispatch(swapCategories({ categoryId, destinationId }));

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (result.type === 'CATEGORY') {
            _swapCategories(source.index, destination.index)
        }
    }

    return (
        <TempStateProvider>
            <div>
                {/* 拖拽组件 */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <AppSidebar />
                    <NoteList />
                </DragDropContext>
            </div>
        </TempStateProvider>
    );
}