import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage'
import { Auth } from './auth'
import { GuessingGame } from './GuessingGame'
import About from './About'
import Home from './Home'
import Product from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>} ></Route>
        <Route path = "/about" element={<About/>} ></Route>
        <Route path = "/product" element={<Product/>} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)