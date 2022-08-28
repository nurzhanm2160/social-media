import React from 'react'
import MyPosts from './MyPosts/MyPosts'

import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.content}>
        Main content
        <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" alt="Background" />
        </div>
        <div>
        ava + description
        </div>
        <MyPosts />
    </div>
  )
}

export default Profile