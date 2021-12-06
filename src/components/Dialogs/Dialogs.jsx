
import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = props.messages.map(m => <Message message={m.message} />);



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