import React from 'react'
import MyPosts from './MyPosts/MyPosts'

import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <>
        Main content
        <ProfileInfo />
        <MyPosts />
    </>
  )
}

export default Profile