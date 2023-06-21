import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import UsersPage from './components/pages/UsersPage'
import UserPage from './components/pages/UserPage'
import Home from './components/pages/Home'
import PageNotFound from './components/pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='users/:id' element={<UserPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
