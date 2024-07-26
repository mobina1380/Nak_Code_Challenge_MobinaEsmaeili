import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './pages/UserList'
import CreateUser from './pages/CreateUser'
import Fibonacci from './pages/Fibonacci'
import CollatzConjecture from './pages/CollatzConjecture'
import UserFormEdit from './pages/EditUser'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:userId" element={<UserFormEdit />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/collatzConjecture" element={<CollatzConjecture />} />
      </Routes>
    </Router>
  )
}

export default App
