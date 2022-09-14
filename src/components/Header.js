import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core'
import logo from '../utils/gmail-logo.png'
import SearchIcon from '@material-ui/icons/Search'
import TuneIcon from '@material-ui/icons/Tune'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" />
      </div>
      <div className="header__middle">
        <SearchIcon />

        <input type="text" placeholder="Search in mail" />
        <button type="submit"></button>
        <TuneIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  )
}

export default Header