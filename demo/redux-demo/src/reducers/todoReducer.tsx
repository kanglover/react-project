export interface TodoListType {
    id: number;
    content: string;
}

const initState = {
    todoList: [
        {
            id: 1,
            content: 'Play video game'
        }, {
            id: 2,
            content: 'Learn nodejs & python'
        }, {
            id: 3,
            content: 'Join meetup event'
        }
    ]
}

const TodoActions = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
} as const;

interface ActionsPayloadMap {
    type: keyof typeof TodoActions;
    payload: TodoListType;
};

const todoReducer = (state = initState, action: ActionsPayloadMap) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'REMOVE_TODO':
            return {
                todoList: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;


/* const initState = [
    {
        id: 1,
        content: 'Play video game'
    }, {
        id: 2,
        content: 'Learn nodejs & python'
    }, {
        id: 3,
        content: 'Join meetup event'
    }
]

interface ActionsPayloadMap {
    type: keyof typeof TodoActions;
    payload: TodoListType[] & number;
};

const ACTION_HANDLERS = {
    [TodoActions.ADD_TODO]: (state: TodoListType[], {payload}: {payload: TodoListType[]}) => [...state, payload],
    [TodoActions.REMOVE_TODO]: (state: TodoListType[], {payload: id}: {payload: number}) => state.filter(
        todo => todo.id !== id
    )
}

function createReducer() {
    return function reducer(state = initState, action: ActionsPayloadMap) {
        const handler = ACTION_HANDLERS[action.type]
        return handler ? handler(state, action) : state
    }
}

export default createReducer(); */