import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes,Route,Navigate,} from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';
import Announcements from './pages/Announcements';
import 'react-bootstrap'
import UserInterface from './courses/UserInterface';
import Zoom from './components/Zoom';
import Syllabus from './components/Syllabus';
import RewardCenter from './components/RewardCenter';

function App() {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState(""); // Global variable to store user input

  // Callback function to set user input in App.jsx
  const handleUserInput = (input) => {
    setUserInput(input);
  }

  return (
    <div className="App">
       <Router>
            <Routes>
            <Route index element={<LoginPage onUserInput={handleUserInput} />} />
            </Routes>
            </Router>
            <NavBar />
            <Container>
            <Router>
            <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/announcements" element={<Announcements />} />
            {/* <Route path="/todolist" element={<Calender />} /> */}
            <Route path="/UserInterface" element={<UserInterface />} />
            <Route path="/Zoom" element={<Zoom />} />
            <Route path="/RewardCenter" element={<RewardCenter />} />
            <Route path="/Syllabus" element={<Syllabus />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </Router>
            </Container>
   </div>
   

  )
}

export default App
