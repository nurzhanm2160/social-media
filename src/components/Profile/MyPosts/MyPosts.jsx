import React, { memo, useState } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = memo(({ addPost, profilePage }) => {
    console.log('MyPosts');

    const posts = profilePage.posts.map((item, index) => {
        return <Post name={item.name} message={item.message} key={index} />;
    });

    const [text, setText] = useState('');

    const onPostChange = (e) => {
        setText(e.target.value);
    };

    const onAddPost = () => {
        addPost(text);
        setText('');
    };

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={text} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>{posts}</div>
        </div>
    );
});

export default MyPosts;
