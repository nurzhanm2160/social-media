import React from 'react';
import styles from '../ProfileInfo.module.css';
import { Contact } from '../Contact/Contact';

export const ProfileData = ({ profile, activeEditMode }) => {
    return (
        <div className={styles.profileDescription}>
            <div className={styles.contacts}>
                <div>
                    <button onClick={() => activeEditMode()}>edit</button>
                </div>
                <div>
                    <b>looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                {profile.lookingForAJob && (
                    <div>
                        <b>my professional skills: </b>
                        {profile.lookingForAJobDescription}
                    </div>
                )}
                <div>
                    <b>about me: </b> {profile.aboutMe}
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.title}>
                    <b>contacts:</b>
                    <div className={styles.contactItems}>
                        {Object.keys(profile.contacts).map((contact) => {
                            return (
                                <Contact
                                    key={contact}
                                    contactTitle={contact}
                                    contactValue={profile.contacts[contact]}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
