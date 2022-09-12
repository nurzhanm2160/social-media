import React from 'react'

import user from '../../../../assets/user.jpg'
import style from './Post.module.css'


const Post = ({name, message}) => {
  return (
    <div className={style.item}>
      <div>
        <div>{name}</div>
        <img src={user} alt="Avatar" />
      </div>
      {message}
    </div>
  )
}

export default Post