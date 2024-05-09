import React from 'react'
import Home from './test/Home'
import About from './test/About'
import Contact from './test/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

 const  a = 'Welcome To';
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home c = {a}/>}/>
        <Route path='/about' element={<About d = {a}/>}/>
        <Route path='/contact' element={<Contact e = {a}/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App