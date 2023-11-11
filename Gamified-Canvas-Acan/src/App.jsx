import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <LoginPage />
    </div>
  )
}

export default App
