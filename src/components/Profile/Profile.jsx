import React from 'react';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = () => {
    return (
        <>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </>
    );
};

export default Profile;
