import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {addPostAC} from "../../redux/reducers/profileReducer";
import {StoreContext} from "../../StoreContext";
import Post from "./MyPosts/Post/Post";

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) =>
        {
            const posts = store.getState().profilePage.posts.map((item, index) => {
                return <Post name={item.name} message={item.message} key={index}/>
            })

            const addPost = (body) => {
                store.dispatch(addPostAC(body))
            }

            return <MyPosts posts={posts} addPost={addPost} />}
        }
    </StoreContext.Consumer>

};

export default MyPostsContainer;