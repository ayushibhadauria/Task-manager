import * as types from '../config/actiontype'

export const loginUserAction = (creds) => {
    return {
        type: types.LOGIN_USER,
        creds
    }
}

export const userLoggedIn = (user) => {
    return {
        type: types.USER_LOGGEDIN,
        user
    }
}

export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    }
}

export const userLoggedOutAction = () => {
    return {
        type: types.USER_LOGGEDOUT
    }
}