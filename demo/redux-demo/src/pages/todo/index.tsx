import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import type { ReducerType } from '../../reducers/rootReducer';

const TodoList: React.FC = () => {
    const todoList = useSelector((state: ReducerType) => state.todos.todoList);
    const dispatch = useDispatch();

    const [inputTodo, setInputTodo] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTodo(e.target.value);
    };

    const addNewTodo = () => {
        if (inputTodo.trim().length > 0) {
            setErrMsg('');

            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: Math.random(),
                    content: inputTodo
                }
            });

            setInputTodo('');
        }
        else {
            setErrMsg('Please input something...');
        }
    };

    return (
        <section id="section-todo">
            <h3 className="center-align white-text blue">Todo List</h3>
            {
                todoList.length > 0
                    ? (<ul>
                        {
                            todoList.map(item => {
                                return <TodoItem key={item.id} item={item} />
                            })
                        }
                    </ul>)
                    : (<p>You don't have anything to do! Awesome!</p>)
            }
            <p className="red-text err-msg col s12 center-align">
                {errMsg}
            </p>
            <input type="text" onChange={handleInput} value={inputTodo} placeholder="Add todo...." />
            <button onClick={addNewTodo}>Add</button>
        </section>
    )
}
export default TodoList;