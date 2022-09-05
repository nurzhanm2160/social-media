import React from 'react'
import {useRef, useState} from 'react'

import style from './MyPosts.module.css'
import {addPostAC} from "../../../redux/reducers/profileReducer";


const MyPosts = ({posts, addPost}) => {

    const [text, setText] = useState('')

    const onPostChange = (e) => {
        setText(e.target.value)
    }

    const onAddPost = () => {
        addPost(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={text}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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