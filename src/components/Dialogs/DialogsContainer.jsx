import React from 'react';
import {StoreContext} from "../../StoreContext";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";
import {addMessageAC} from "../../redux/reducers/dialogsReducer";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
                const dialogs = store.getState().dialogsPage.dialogs.map((item, index) => {
                    return <Dialog id={item.id} name={item.name} key={index}/>
                })

                const messages = store.getState().dialogsPage.messages.map((item, index) => {
                    return <Message message={item.message} key={index}/>
                })

                const addMessage = (message) => {
                    store.dispatch(addMessageAC(message))
                }

                return <Dialogs dialogs={dialogs} messages={messages} addMessage={addMessage} />
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;