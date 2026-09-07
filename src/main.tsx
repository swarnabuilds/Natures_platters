import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Banner from './components/Banner/Banner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
  </StrictMode>,
)
