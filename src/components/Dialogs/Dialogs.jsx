import React, {useState} from 'react'

import style from './Dialogs.module.css'

const Dialogs = ({dialogs, messages, addMessage}) => {
    const [value, setValue] = useState("")

    const onMessageChange = (e) => {
        setValue(e.target.value)
    }

    const onAddMessage = () => {
        addMessage(value)
        setValue('')
    }



    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.dialog}>
                {messages}
                <div>
                    <textarea value={value} onChange={onMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs