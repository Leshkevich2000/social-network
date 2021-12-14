import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}


window.store = store;




export default store;
