import React, { FC } from 'react';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';

import style from './Navbar.module.css';

import { CgProfile } from 'react-icons/cg';
import { SiGooglemessages } from 'react-icons/si';
import { ImNewspaper } from 'react-icons/im';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { FiSettings, FiUsers } from 'react-icons/fi';

const Navbar: FC = () => {
    return (
        <nav className={style.nav}>
            <div className={style.items}>
                <LinkWithIcon
                    path='/profile'
                    title='Profile'
                    Icon={CgProfile}
                    style={style.activeLink}
                />
                <LinkWithIcon path='/users' title='Users' Icon={FiUsers} style={style.activeLink} />
                <LinkWithIcon
                    path='/dialogs'
                    title='Dialogs'
                    Icon={SiGooglemessages}
                    style={style.activeLink}
                />
                <LinkWithIcon
                    path='/news'
                    title='News'
                    Icon={ImNewspaper}
                    style={style.activeLink}
                />
                <LinkWithIcon
                    path='/music'
                    title='Music'
                    Icon={BsMusicPlayerFill}
                    style={style.activeLink}
                />
                <LinkWithIcon
                    path='/settings'
                    title='Settings'
                    Icon={FiSettings}
                    style={style.activeLink}
                />
            </div>
        </nav>
    );
};

export default Navbar;
