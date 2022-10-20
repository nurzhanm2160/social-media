import React, { useState } from 'react';

import user from '../../../assets/user.jpg';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm';
import { ProfileData } from './ProfileData/ProfileData';

const ProfileInfo = ({ profile, status, updateStatus, owner, saveAvatar }) => {
    if (!profile) {
        return <Preloader />;
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    };

    const [editMode, setEditMode] = useState(false);

    const activeEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.profileInformation}>
                    {profile.fullName}
                    <img src={profile.photos.large || user} alt='Profile' />
                    {owner && <input type='file' onChange={(e) => onAvatarSelected(e)} />}
                </div>
                {editMode ? (
                    <ProfileDataForm
                        profile={profile}
                        deactivateEditMode={() => deactivateEditMode()}
                    />
                ) : (
                    <ProfileData profile={profile} activeEditMode={() => activeEditMode()} />
                )}
            </div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'
                    alt='Background'
                />
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </>
    );
};

export default ProfileInfo;
