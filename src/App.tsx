import { Suspense, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./components/Banner/Banner";
import Services from "./components/services/Services";
import PopularProducts from "./components/popularProducts/PopularProducts";
import type { IPopularProduct } from './components'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";


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

    //remove cart
     const handelRemoveCart = (title:string) =>{
        const updatedCart = cart.filter(item=> item.title !== title);
        setCart(updatedCart);
        toast.error("Removed from cart!");
     }

    
    return (
        <div>
            <Navbar cart={cart}></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Cart cart={cart} handelRemoveCart={handelRemoveCart}></Cart>
            <Suspense fallback={<div>Loading products...</div>}>
                    <PopularProducts
                    popularProductPromise={popularProductPromise()}
                    handelAddToCart={handelAddToCart}
                    ></PopularProducts>
            </Suspense>
            <Footer></Footer>

    <ToastContainer />

        </div>
    );
};

export default App;