import React from 'react'
import style from './LinkWithIcon.module.css'

import { NavLink } from 'react-router-dom'

const LinkWithIcon = ({path, title, Icon, style}) => {
  return (
    <div className={style.item}>
        <NavLink 
        to={path} 
        className={({isActive}) => (
            isActive ? style : null
        )}
        >
            
            <Icon />
            {title}
            
        </NavLink>
  </div>
  )
}

export default LinkWithIcon