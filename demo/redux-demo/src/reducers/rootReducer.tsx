import todoReducer, { TodoListType } from './todoReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

export interface ReducerType{
    todos: {
        todoList: TodoListType[];
    },
    counter: number;
};

export default combineReducers({
    todos: todoReducer,
    counter: counterReducer
});
