import React from "react";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reduсers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,



});
let store = createStore(reduсers, applyMiddleware(thunkMiddleware));

////////////////////////
window.store = store;///
////////////////////////

export default store;