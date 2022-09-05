import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {addPostAC} from "../../redux/reducers/profileReducer";

export const MyPostsContainer = ({dispatch, posts}) => {
    const addPost = (body) => {
        dispatch(addPostAC(body))
    }

    return <MyPosts posts={posts} addPost={addPost} />
};

export default MyPostsContainer;