import React from 'react'
import { useRef } from 'react'

import style from './MyPosts.module.css'

const MyPosts = ({posts, addPost}) => {
  

  const textareaRef = useRef(null)

  const onAddPost = () => {
    const text = textareaRef.current.value
    console.log(text)
    addPost(text)
  }

  return (
    <div>
        My posts
        <div>
          <div>
            <textarea ref={textareaRef}></textarea>
          </div>  
          <div>
            <button onClick={() => onAddPost() }>Add post</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={style.posts}>
          {posts}
        </div>
    </div>
  )
}

export default MyPosts