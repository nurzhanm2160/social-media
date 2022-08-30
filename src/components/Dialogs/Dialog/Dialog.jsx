import React from 'react'

import { NavLink } from 'react-router-dom'

import style from './Dialog.module.css'

const Dialog = ({name, id}) => {
  return (
    <div className={style.dialog}>
        <NavLink to={`/dialogs/${id}`}>
            {name}
        </NavLink>
    </div>
  )
}

export default Dialog