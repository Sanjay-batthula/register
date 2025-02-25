import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
// import {useEffect, useState} from 'react'
// import axios from 'axios'

function App() {

  // const [user, setUser] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:3001/employees')
  //   .then(result => setUser(result.data))
  //   .catch(err => console.log.error(err));
  // }
  // , []);


  return (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App