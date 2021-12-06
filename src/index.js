import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Valera' },
]

let messagesData = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'my name is Alexey' },
    { id: 3, message: 'I work in IT-company' },
    { id: 4, message: 'I learn React' },
]

let postsData = [
    { message: 'Hi how are you?', counterLikes: 15 },
    { message: 'it is my first message!', counterLikes: 5 },
    { message: 'i am learning REACT', counterLikes: 100 },
]


ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
