
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            console.log("Send message");
            let newMessage = {
                id: 6,
                message: action.newMessageText
            }
            let copyState = Object.assign({}, state);
            console.log(copyState);
            console.log(state);
            copyState.messages.push(newMessage);
            return copyState;
        }
        default: return state;
    }
}

export const addMessageAC = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText
});


export default dialogsReducer;