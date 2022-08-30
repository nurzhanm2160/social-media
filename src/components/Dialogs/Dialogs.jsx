import React from 'react'

import style from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            Dialog
        </div>
        <div className={style.dialog}>
            привет
        </div>
    </div>
  )
}

export default Dialogs