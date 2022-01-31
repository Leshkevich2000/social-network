import { getProfile } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initialState = {
    posts: [
        { message: 'Hi how are you?', counterLikes: 15 },
        { message: 'it is my first message!', counterLikes: 5 },
        { message: 'i am learning REACT', counterLikes: 100 },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state);

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                counterLikes: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case SET_USERS_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    }
};

export const getUserProfileTC = (userId) => {
    return (dispatche) => {
        getProfile(userId)
            .then(response => {
                dispatche(setUsersProfile(response.data));
            });
    }

};

export default profileReducer;