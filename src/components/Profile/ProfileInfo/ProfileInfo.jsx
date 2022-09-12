import React from 'react'

import user from '../../../assets/user.jpg'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = ({profile}) => {
    if(!profile){
        return (
            <Preloader />
        )
    }

    return (
        <>
            <div className={styles.container}>
                    <img src={profile.photos.large ? profile.photos.large : user} alt={"Profile Large Photo"}/>
                <div >hethe</div>
                <div>hethe</div>
                <div>hethe</div>
                <div>hethe</div>
            </div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"
                    alt="Background"/>
            </div>
            <div>
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo