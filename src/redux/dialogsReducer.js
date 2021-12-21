
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
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;