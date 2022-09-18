import React from 'react'
import './Preloader.css'
import { LinearProgress } from '@material-ui/core'
import logo from '../utils/googleworkspace.svg'

function Preloader() {
  window.addEventListener('load', function () {
    document.querySelector('.preloader').classList.add('hide-preloader')
  })
  return (
    <div className="preloader">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        alt="logo"
      />
      <LinearProgress color="secondary" />
      <img src={logo} alt="google workspace" className="logo-google" />
    </div>
  )
}

export default Preloader
