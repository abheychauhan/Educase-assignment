import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingScreen from './Components/LandingScreen'
import LoginScreen from './Components/LoginScreen'
import ProfileScreen from './Components/ProfileScreen'
import SignupScreen from './Components/SignupScreen'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  )
}

export default App