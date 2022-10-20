import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileThunkCreator } from '../../../../redux/reducers/profileReducer';
import styles from '../ProfileInfo.module.css';

export const ProfileDataForm = ({ profile, deactivateEditMode }) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            github: profile.contacts.github,
            vk: profile.contacts.vk,
            facebook: profile.contacts.facebook,
            instagram: profile.contacts.instagram,
            twitter: profile.contacts.twitter,
            website: profile.contacts.website,
            youtube: profile.contacts.youtube,
            mainLink: profile.contacts.mainLink,
        },
        validate: (values) => {},
        onSubmit: (values) => {
            const {
                fullName,
                lookingForAJob,
                lookingForAJobDescription,
                aboutMe,
                github,
                vk,
                facebook,
                instagram,
                twitter,
                website,
                youtube,
                mainLink,
            } = values;

            const newProfile = {
                fullName,
                lookingForAJob,
                lookingForAJobDescription,
                aboutMe,
                github,
                vk,
                facebook,
                instagram,
                twitter,
                website,
                youtube,
                mainLink,
            };
            dispatch(updateProfileThunkCreator(newProfile));
            deactivateEditMode();
        },
    });

    return (
        <div className={styles.profileDescription}>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.contacts}>
                    <div>
                        <button type='submit'>save</button>
                    </div>
                    <div>
                        <b>looking for a job: </b>
                        <input
                            id='lookingForAJob'
                            name='lookingForAJob'
                            type='checkbox'
                            onChange={formik.handleChange}
                            value={formik.values.lookingForAJob}
                        />
                    </div>
                    {profile.lookingForAJob && (
                        <div>
                            <b>my professional skills: </b>
                            <input
                                id='lookingForAJobDescription'
                                name='lookingForAJobDescription'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.lookingForAJobDescription}
                            />
                        </div>
                    )}
                    <div>
                        <b>about me: </b>
                        <input
                            id='aboutMe'
                            name='aboutMe'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.aboutMe}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
