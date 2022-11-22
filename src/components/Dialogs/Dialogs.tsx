import React, { ChangeEvent, FC, useState } from 'react';

import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { InitialStateType } from '../../redux/reducers/dialogsReducer';

interface PropsType {
    dialogsPage: InitialStateType;
    addMessage: (value: string) => void;
}

const Dialogs: FC<PropsType> = ({ addMessage, dialogsPage }) => {
    const dialogs = dialogsPage.dialogs.map((item, index) => {
        return <Dialog id={item.id} name={item.name} key={index} />;
    });

    const messages = dialogsPage.messages.map((item, index) => {
        return <Message message={item.message} key={index} />;
    });

    const [value, setValue] = useState('');

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const onAddMessage = () => {
        addMessage(value);
        setValue('');
    };

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogs}>{dialogs}</div>
            <div className={style.dialog}>
                {messages}
                <div>
                    <textarea value={value} onChange={(e) => onMessageChange(e)} />
                </div>
                <div>
                    <button onClick={onAddMessage}>send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
