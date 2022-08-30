import React from 'react'

import style from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'

const Dialogs = () => {
  return (
    <div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            <Dialog id={1} name="Даурен" />
            <Dialog id={2} name="Нуркен" />
            <Dialog id={3} name="Кусайын" />
            <Dialog id={4} name="Быржан" />
        </div>
        <div className={style.dialog}>
            <Message message={"Салам"} />
        </div>
    </div>
  )
}

export default Dialogs