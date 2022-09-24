import React from 'react'
import './App.css'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import SendMail from './components/SendMail'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import Login from './components/Login'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './firebase'

function App() {
  //fetch state from data layer
  const user = useSelector(selectUser)
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        )
      }
    })
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          {/* <Preloader /> */}
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
