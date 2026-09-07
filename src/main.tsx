import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Banner from './components/Banner/Banner'
import Services from './components/services/Services'
import PopularProducts from './components/popularProducts/PopularProducts'
import type { IPopularProduct } from './components'

const popularProductPromise = async():Promise<IPopularProduct[]> =>{
  const res = await fetch('/popularProduct.json')
  const data = await res.json();
  return data ;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <Services></Services>
    <PopularProducts popularProductPromise={popularProductPromise()}></PopularProducts>
  </StrictMode>,
)
