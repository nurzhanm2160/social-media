import React from 'react'

import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  const postItems = [
    {name: "nurik2160", message: "post 1"},
    {name: "dauren", message: "post 2"},
    {name: "narkoz520", message: "post 3"},
  ]

  const posts = posts.map((item, index) => {
    return <Post name={item.name} message={item.message} key={index} />
  })

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