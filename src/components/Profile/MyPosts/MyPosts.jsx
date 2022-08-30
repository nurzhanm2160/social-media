import React from 'react'

import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({posts}) => {

  return (
    <div>
        My posts
        <div>
          <div>
            <textarea></textarea>
          </div>  
          <div>
            <button>Add post</button>
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