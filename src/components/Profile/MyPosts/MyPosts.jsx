import React from 'react'
import {useRef, useState} from 'react'

import style from './MyPosts.module.css'

const MyPosts = ({posts, dispatch}) => {

    const [text, setText] = useState('')

    const textareaRef = useRef(null)

    const onPostChange = () => {
        setText(textareaRef.current.value)
    }

    const onAddPost = () => {
        const text = textareaRef.current.value
        dispatch({
          type: 'ADD_POST',
          postText: text,
        })
        setText('')
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={text} ref={textareaRef}></textarea>
                </div>
                <div>
                    <button onClick={() => onAddPost()}>Add post</button>
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