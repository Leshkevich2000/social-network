
import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem/DialogItem';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

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

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Valera' id='4' />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />

            </div>
        </div>
    )
}

export default Dialogs;