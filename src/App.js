import React from 'react'
import './App.css'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Preloader />
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
