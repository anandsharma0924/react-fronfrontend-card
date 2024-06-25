import React from 'react'
import Show from './component/show'
import { Route, Routes } from 'react-router-dom'
import View from './component/View'
import Update from './component/Update'
import Add from './component/Add'
import Login from './Login/Login'
import Loginshow from './Login/Loginshow'

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/Loginshow' element={<Loginshow/>} ></Route>
          <Route path='/Show' element={<Show/>} ></Route>
          <Route path='/view/:id' element={<View/>} ></Route>
          <Route path='/Update/:id' element={<Update/>} ></Route>
          <Route path='/Add' element={<Add/>} ></Route>
        </Routes>
    </div>
    </React.Fragment>
  )
}

export default App
