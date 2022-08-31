import React from 'react'
import MyPosts from './MyPosts/MyPosts'

import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({posts, addPost}) => {
  return (
    <>
        Main content
        <ProfileInfo />
        <MyPosts posts={posts} addPost={addPost} />
    </>
  )
}

export default Profile