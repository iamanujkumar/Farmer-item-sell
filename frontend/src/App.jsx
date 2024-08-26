import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import NoPage from './Pages/NoPage/NoPage'
import LoginPage from './Pages/Login/LoginPage'
import SignupPage from './Pages/Registration/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/*" element={<NoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      
      </Routes>
    
    </Router>
  )
}

export default App
