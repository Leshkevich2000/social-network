
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContecst';

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>

            {(store) => {
                let dialogs = store.getState().dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
                let messages = store.getState().dialogsPage.messages.map(m => <Message message={m.message} />);
                let body = store.getState().dialogsPage.newMessageText;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let updateNewMessageText = (body) => {
                    store.dispatch(updateNewMessageTextCreator(body));
                }
                return (
                    <Dialogs dialogs={dialogs} messages={messages} body={body} dispatch={store.dispatch}
                        addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
                );
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;