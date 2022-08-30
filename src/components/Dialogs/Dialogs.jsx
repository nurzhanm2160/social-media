import React from 'react'

import style from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'




const Dialogs = ({dialogs, messages}) => {
  return (
    <div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {dialogs}
        </div>
        <div className={style.dialog}>
            {messages}
        </div>
    </div>
  )
}

export default Dialogs