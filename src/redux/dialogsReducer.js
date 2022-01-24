
const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'my name is Alexey' },
        { id: 3, message: 'I work in IT-company' },
        { id: 4, message: 'I learn React' },
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            console.log("Send message");
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            let copyState = Object.assign({}, state);
            console.log(copyState);
            console.log(state);
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = Object.assign({}, state);
            copyState.newMessageText = action.newText;
            return copyState;
        }
        default: return state;
    }
}

export const addMessageAC = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;