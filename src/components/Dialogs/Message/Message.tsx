import React, { FC } from 'react';

interface PropsType {
    message: string;
}

const Message: FC<PropsType> = ({ message }) => {
    return <div>{message}</div>;
};

export default Message;
