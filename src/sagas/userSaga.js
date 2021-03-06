import { takeEvery, call, put, all } from 'redux-saga/effects'

import history from '../history'

import * as types from '../config/actiontype'
import * as service from '../services/userService'
import * as actions from '../actions/userAction'
import * as alert from '../actions/alertAction'

function* login({ creds }) {
    try {
        const user = yield call(service.login, creds)
        yield put(actions.userLoggedIn(user))
        yield put(alert.setAlertAction({
            text: 'User Logged In!',
            color: 'success'
        }))
        history.push('/tasks')
    } catch (e) {
        yield put(alert.setAlertAction({
            text: e.msg,
            color: 'danger'
        }))
    }
}

function* logout() {
    yield call(service.logout)
    yield put(actions.userLoggedOutAction())
    history.push('/')
}

function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER, login)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, logout)
}

export function* userSaga() {
    yield all([
        watchLoginUser(),
        watchLogoutUser()
    ])
}