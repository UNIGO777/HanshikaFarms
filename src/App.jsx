import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Pages/Navbar'
import { Routes , Route } from 'react-router-dom'
import EnquiryForm01 from './Components/Pages/EnquiryForm01'
import PopupForm from './Components/Pages/PopupForm'

function App() {

  return (
    <div>
  
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/enquiry' element={<EnquiryForm01/>}/>
        <Route path='/popupform' element={<PopupForm/>}/>
      </Routes>
    </div>
  )
}

export default App
