
import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

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

    let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = messagesData.map(m => <Message message={m.message} />);



    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;