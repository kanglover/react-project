const initCounter = 5;

export const COUNTER_ACTIONS = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
    DECREMENT_COUNT: 'DECREMENT_COUNT',
    RESET_COUNT: 'RESET_COUNT'
} as const;

const ACTION_HANDLERS = {
    [COUNTER_ACTIONS.INCREMENT_COUNT]: (state: number) => state + 1,
    [COUNTER_ACTIONS.DECREMENT_COUNT]: (state: number) => state - 1,
    [COUNTER_ACTIONS.RESET_COUNT]: () => 0
};

const counterReducer = (state = initCounter, {type}: {type: keyof typeof COUNTER_ACTIONS}) => {
    const handler = ACTION_HANDLERS[type];
    return handler ? handler(state) : state;
}

export default counterReducer;
