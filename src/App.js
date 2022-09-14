import React from 'react'
import './App.css'
import Header from './components/Header'
import loader from './utils/loader.gif'

function App() {
  window.addEventListener('load', function () {
    document.querySelector('.preloader').classList.add('hide-preloader')
  })
  return (
    <div className="app">
      <div className="preloader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt="logo"
        />
        <img src={loader} alt="loader" />
      </div>
      <Header />
    </div>
  )
}

export default App
