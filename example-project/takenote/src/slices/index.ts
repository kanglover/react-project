import { combineReducers } from 'redux';
import { RootState } from './../types/index';
import authReducer from './auth';
import categoryReducer from './category';

const rootReducer = combineReducers<RootState>({
    authState: authReducer,
    categoryState: categoryReducer
})

export default rootReducer;