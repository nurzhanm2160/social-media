import React from 'react'

import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPostsContainer";

const Profile = ({posts, dispatch}) => {
  return (
    <>
        Main content
        <ProfileInfo />
        <MyPostsContainer posts={posts} dispatch={dispatch} />
    </>
  )
}

export default Profile