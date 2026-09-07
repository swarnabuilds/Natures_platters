import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Banner from './components/Banner/Banner'
import Services from './components/services/Services'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <Services></Services>
  </StrictMode>,
)
