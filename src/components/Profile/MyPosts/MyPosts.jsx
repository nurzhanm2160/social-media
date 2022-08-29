import React from 'react'

import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={style.posts}>
            <Post name="nurik2160" message="post 1"/>
            <Post name="dauren" message="post 2"/>
            <Post name="narkoz520" message="post3 " />
        </div>
    </div>
  )
}

export default MyPosts