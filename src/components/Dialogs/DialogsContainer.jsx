
import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    let dialogs = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = state.dialogsPage.messages.map(m => <Message message={m.message} />);
    return ({
        'dialogs': dialogs,
        'messages': messages,
        'body': state.dialogsPage.newMessageText
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextCreator(body));

        }
    });
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
