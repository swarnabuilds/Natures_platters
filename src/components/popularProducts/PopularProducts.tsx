 
import { use, useState } from 'react';
import popular from '../../assets/img/popular.png'
import PopularProductCard from '../popularProductCard/PopularProductCard';
import type { IPopularProduct } from '../index';

interface IPopularProductProps {
popularProductPromise: Promise<IPopularProduct[]>
handelAddToCart:(product:IPopularProduct)=>void
}
const PopularProducts = ({popularProductPromise, handelAddToCart}:IPopularProductProps) => {
const data = use(popularProductPromise)

    

    return (
    <div className="my-[80px] container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#179800]">
        Popular Products
      </h2>

      <div className="grid grid-cols-12 gap-8">
        {/* 30% */}

        <div className="relative h-[300px] z-10 pr-24 col-span-4 rounded-md shadow-2xl p-6  bg-gradient-to-r from-[#179800] to-[#6d7b6a]">
          <h2 className="font-bold text-2xl">30% discount</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-white text-[#179800] font-bold py-2 px-4 my-4 rounded-md hover:bg-gray-200">
            Buy Now
          </button>
          <img className='absolute bottom-0 right-0 z-0 w-auto h-[200px]' src={popular} alt="" />
        </div>

        {/* 70% */}
        <div className="col-span-8">
          {/* Card1, card2, card */}

          <div className="grid grid-cols-3 gap-4">
            {
                data.map(product => <PopularProductCard key={product.title} 
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></PopularProductCard>)
            }
          </div>
        </div>
      </div>
    </div>
    );
};

export default PopularProducts;