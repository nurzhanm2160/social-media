import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <div>
          <NavLink 
            to="/profile" 
            className={({isActive}) => (
              isActive ? style.activeLink : null
            )}
          >
            Profile
            </NavLink>
        </div>
        <div>
         <NavLink 
           to="/dialogs"
           className={({isActive}) => (
            isActive ? style.activeLink : null
          )}
         >
            Messages
          </NavLink>
        </div>
        <div>
        <NavLink 
          to="/news"
          className={({isActive}) => (
            isActive ? style.activeLink : null
          )}
        >
          News
        </NavLink>
        </div>
        <div>
        <NavLink 
          to="/music"
          className={({isActive}) => (
            isActive ? style.activeLink : null
          )}
        >
          Music
        </NavLink>
        </div>
        <div>
        <NavLink 
          to="/settings"
          className={({isActive}) => (
            isActive ? style.activeLink : null
          )}
        >
          Settings
        </NavLink>
        </div>
      </nav>
  )
}

export default Navbar