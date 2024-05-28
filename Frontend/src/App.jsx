
import React from 'react'
import Home from './components/Home/Home'
 import { Route } from 'react-router-dom'
 import {Routes  } from 'react-router-dom'
import Courses from './components/Course/Courses'
import Signup from './Signup'


function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    </>
  )
}

export default App
