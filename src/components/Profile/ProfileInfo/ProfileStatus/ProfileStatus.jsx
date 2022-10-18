import React, { useEffect, useState } from 'react';

export const ProfileStatus = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState(status);

    useEffect(() => {
        setStatusText(status);
    }, [status]);

    const onChangeStatus = (e) => {
        setStatusText(e.target.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusText);
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        autoFocus
                        onChange={onChangeStatus}
                        onBlur={deactivateEditMode}
                        value={statusText}
                    />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {!statusText ? '-----' : statusText}
                    </span>
                </div>
            )}
        </div>
    );
};
