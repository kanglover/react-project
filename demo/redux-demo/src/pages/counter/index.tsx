import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTER_ACTIONS } from '../../reducers/counterReducer';

const Counter: React.FC = () => {
    const counter = useSelector(({counter}: {counter: number}) => counter);
    const dispatch = useDispatch();

    return (
        <section id='section-counter'>
            <h3>Simple Counter</h3>
            <p>Count is: {counter}</p>
            <div>
                <button onClick={() => dispatch({type: COUNTER_ACTIONS.INCREMENT_COUNT})}>Add 1</button>
                <button onClick={() => dispatch({type: COUNTER_ACTIONS.DECREMENT_COUNT})}>Decrease 1</button>
                <button onClick={() => dispatch({type: COUNTER_ACTIONS.RESET_COUNT})}>Reset count</button>
            </div>
        </section>
    );
};


export default Counter;