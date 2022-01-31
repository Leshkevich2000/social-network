
import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';




let AuthRedirectComponent = withAuthRedirect(Dialogs);

// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Navigate to='/login' />
//     return <Dialogs{...props} />
// }

let mapStateToProps = (state) => {
    let dialogs = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = state.dialogsPage.messages.map(m => <Message message={m.message} />);
    return ({
        'dialogs': dialogs,
        'messages': messages,
        'body': state.dialogsPage.newMessageText,
        'isAuth': state.auth.isAuth
    });
};

const DialogsContainer = connect(mapStateToProps, { addMessage: addMessageAC, updateNewMessageText: updateNewMessageTextAC })(AuthRedirectComponent);

export default DialogsContainer;

