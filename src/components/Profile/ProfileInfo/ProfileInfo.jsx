import React from 'react';

import user from '../../../assets/user.jpg';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.profileInformation}>
                    {profile.fullName}
                    <img src={profile.photos.large ? profile.photos.large : user} alt='Profile' />
                </div>
                <div className={styles.profileDescription}>
                    <div className={styles.contacts}>
                        <div>Vk:</div>
                        <div>GitHub:</div>
                    </div>
                    <div className={styles.contacts}>
                        <div>Vk:</div>
                        <div>GitHub:</div>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'
                    alt='Background'
                />
            </div>
            <ProfileStatus status={'test'} />
        </>
    );
};

export default ProfileInfo;
