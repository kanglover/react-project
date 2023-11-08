import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../reducers/rootReducer';
import { TodoListType } from '../../reducers/todoReducer';

const TodoItem: React.FC<{ key: number, item: TodoListType }> = (props) => {
    const todoList = useSelector((state: ReducerType) => state.todos.todoList)
    const dispatch = useDispatch();

    const removeTodoItem = (todoId: number) => {
        let newTodoList = todoList.filter(item => item.id !== todoId);
        dispatch({ type: 'REMOVE_TODO', payload: newTodoList });
    }

    return (
        <li className="collection-item" key={props.item.id}>{props.item.content}
            <span
                onClick={() => {
                    removeTodoItem(props.item.id)
                }}
                className="secondary-content">
                <i className="remove-btn material-icons blue-text">clear</i>
            </span>
        </li>
    );
}

export default TodoItem;