import { all, put, takeLatest } from 'redux-saga/effects'
import { login, loginError, loginSuccess } from '../slices/auth';

function* loginUser() {
    try {
        yield put(loginSuccess({name: 'demo user'}));
    }
    catch (err: any) {
        yield put(loginError(err.message));
    }
}


function* rootSaga() {
    yield all([
        takeLatest(login.type, loginUser)
    ])
}
export default rootSaga;
