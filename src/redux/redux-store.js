import React from "react";
import { combineReducers, createStore } from 'redux';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./usersReducer";

let reduсers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer


});
let store = createStore(reduсers);

////////////////////////
window.store = store;///
////////////////////////

export default store;