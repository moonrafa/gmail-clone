import React from 'react'
import './Login.css'
import logo from '../utils/gmail-logo.png'
import google from '../utils/google.svg'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        )
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="gmail" />
        <button onClick={signIn}>
          <img src={google} alt="logo" />
          Login with google
        </button>
      </div>
    </div>
  )
}

export default Login
