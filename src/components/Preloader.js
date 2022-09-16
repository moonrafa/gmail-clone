import React from 'react'
import './Preloader.css'
import loader from '../utils/loader.gif'

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
      <img src={loader} alt="loader" />
    </div>
  )
}

export default Preloader
