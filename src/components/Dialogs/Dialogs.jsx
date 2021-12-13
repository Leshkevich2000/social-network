
import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/state';


const Dialogs = (props) => {


    let dialogs = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = props.state.dialogsPage.messages.map(m => <Message message={m.message} />);
    let body = props.state.dialogsPage.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}

                <div className='new-post'>
                    <div>
                        <textarea onChange={onMessageChange} value={body}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage} >Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;