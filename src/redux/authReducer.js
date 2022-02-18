import { stopSubmit } from "redux-form";
import { authMe, login, logout } from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,

            }
        }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });

export const authMeTC = () => {
    return (dispatch) => {
        return authMe().then(res => {
            if (res.data.resultCode == 0) {
                let userId = res.data.data.id;
                let email = res.data.data.email;
                let login = res.data.data.login;
                dispatch(setAuthUserData(userId, email, login, true));

            }
        });
    }
}

export const userLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        login(email, password, rememberMe).then(res => {
            if (res.resultCode === 0) {
                dispatch(authMeTC());
            } else {
                dispatch(stopSubmit('login', { _error: res.messages.length > 0 ? res.messages[0] : "some error" }));
            }
        });
    }
}
export const userLogout = () => {
    return (dispatch) => {
        logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;