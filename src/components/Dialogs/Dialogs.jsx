
import React from 'react';
import style from './Dialogs.module.css'



const Dialogs = (props) => {

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);

    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogs}
            </div>
            <div className={style.messages}>
                {props.messages}

                <div className='new-post'>
                    <div>
                        <textarea onChange={onMessageChange} value={props.body}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage} >Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;