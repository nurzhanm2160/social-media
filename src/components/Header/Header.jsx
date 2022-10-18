import React from 'react';

import style from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={style.header}>
            <div className={style.headerItems}>
                <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='Logo' />
                <div>
                    {isAuth ? (
                        <div>
                            <span>{login}</span>
                            <button onClick={logout}>logout</button>
                        </div>
                    ) : (
                        <NavLink to={'login'}>Login</NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
