import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import SideBar from './Components/SideBar/SideBar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Users from './Components/Users/Users';


function App() {


  return (
    <>


      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-dashboard" element={<SideBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
