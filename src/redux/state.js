
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { message: 'Hi how are you?', counterLikes: 15 },
                { message: 'it is my first message!', counterLikes: 5 },
                { message: 'i am learning REACT', counterLikes: 100 },
            ],
            newPostText: ''
        },
        sitebar: [
            { id: 1, name: 'Alex', lastName: 'Petrov', image: 'https://pw.artfile.me/wallpaper/10-01-2019/650x366/kino-filmy-predator-arnold-schwarzenegge-1429520.jpg' },
            { id: 2, name: 'Dima', lastName: 'Boschirov', image: 'https://www.prestashop.com/forums/uploads/monthly_2017_12/Awesome-Tux.thumb.png.f220b4d26e443d1aef106c0fbefd0919.png' },
            { id: 3, name: 'Sveta', lastName: 'Sokolova', image: 'http://image.krasview.ru/thread/400937/786ac44e049d9dad72ffff5133810fb6.jpg' },
        ]

    },
    _callSubscriber() {
        console.log('state changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //{ type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                counterLikes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
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
export const addMessageActionCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
window.store = store;




export default store;
