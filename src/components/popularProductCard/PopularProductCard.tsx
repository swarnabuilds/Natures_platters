import type { IPopularProduct } from "../index";
interface popularProductCardProps {
  product:IPopularProduct;  
}
 

const PopularProductCard = ({product}:popularProductCardProps) => {
    const {productImg, title, price, rating} = product
    return (
      <div className="border border-green-500 p-4 rounded-lg shadow-sm">
      <img src={productImg} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <div className="flex">
        <span className="text-yellow-500">Rating: {rating}</span>
      </div>
      <button className="bg-green-500 text-white px-6 py-2 my-2 rounded-md hover:bg-green-600"> Add To Cart</button>
    </div>
    );
};

export default PopularProductCard;