import React from 'react';

export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    );
};
