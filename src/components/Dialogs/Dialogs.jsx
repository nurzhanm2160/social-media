import React from 'react'

import style from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'

const dialogItems = [
    {id: 1, name: "Даурен"},
    {id: 2, name: "Нуркен"},
    {id: 3, name: "Кусайын"},
    {id: 4, name: "Быржан"},
]

const messageItems = [
    {message: "Салам"},
    {message: "Как дела?"},
    {message: "Что делаешь?"},
    {message: "Как ты?"},
]

const dialogs = dialogItems.map((item, index) => {
    return <Dialog id={item.id} name={item.name} key={index} />
})

const messages = messageItems.map((item, index) => {
    return <Message message={item.message} key={index} />
})

const Dialogs = () => {
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