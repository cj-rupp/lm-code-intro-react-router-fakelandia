import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Home from './components/Home'
import Misdemeanour from './components/Misdemeanour'
import Confession from './components/Confession'
import Layout from './components/Layout'

const App = () =>
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='confession' element={<Confession />} />
          <Route path='misdemeanour' element={<Misdemeanour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>


export default App
