import { Suspense, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./components/Banner/Banner";
import Services from "./components/services/Services";
import PopularProducts from "./components/popularProducts/PopularProducts";
import type { IPopularProduct } from './components'
import { ToastContainer, toast, Bounce } from 'react-toastify';


const popularProductPromise = async():Promise<IPopularProduct[]> =>{
  const res = await fetch('/popularProduct.json')
  const data = await res.json();
  return data ;
}


const App = () => {
//add to cart state
 const [cart, setCart]= useState<IPopularProduct[]>([]);
 const handelAddToCart = (product:IPopularProduct) =>{
        setCart([...cart, product]);
        //toast code
    toast.success(`Added ${product.title} to cart!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    }
    return (
        <div>
            <Suspense fallback={<div>Loading products...</div>}>
                    <Navbar cart={cart}></Navbar>
                    <Banner></Banner>
                    <Services></Services>
                    <PopularProducts
                    popularProductPromise={popularProductPromise()}
                    handelAddToCart={handelAddToCart}
                    ></PopularProducts>
            </Suspense>
    <ToastContainer />

        </div>
    );
};

export default App;