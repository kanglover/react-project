import { combineReducers } from 'redux';

import user from './user';
import topic from './topic';
import message from './message';

const rootReducer = combineReducers({
    topic,
    user,
    message,
});

export default rootReducer;
