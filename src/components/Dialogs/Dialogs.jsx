
import React from 'react';
import style from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormControls/FormControls';
import { maxLengthCreater, required } from '../../utils/validators/validators';
let maxLength50 = maxLengthCreater(50);
const FormMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText" component={TextArea} validate={[required, maxLength50]} />
            </div>
            <div>
                <button >Send message</button>
            </div>
        </form>
    );
};

const NewFormMessage = reduxForm({
    form: 'newMessage'
})(FormMessage);

const Dialogs = (props) => {

    let onAddMessage = (value) => {
        props.addMessage(value.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogs}
            </div>
            <div className={style.messages}>
                {props.messages}

                <div className='new-post'>
                    <NewFormMessage onSubmit={onAddMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;