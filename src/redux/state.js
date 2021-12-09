import { rerenderEntireTree } from "../render";

let state = {
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
        ]
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


}
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        counterLikes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
