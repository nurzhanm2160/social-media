import React from 'react'

import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return (
        <header className={style.header}>
            <div className={style.headerItems}>
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Logo"/>
                <div>
                    {isAuth ? <span>{login}</span> : <NavLink to={"login"}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header