const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { message: 'Hi how are you?', counterLikes: 15 },
        { message: 'it is my first message!', counterLikes: 5 },
        { message: 'i am learning REACT', counterLikes: 100 },
    ],
    newPostText: ''
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
}

export default profileReducer;