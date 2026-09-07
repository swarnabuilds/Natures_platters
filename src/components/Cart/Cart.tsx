import type { IPopularProduct } from "../index";

interface ICartProps {
cart: IPopularProduct[]
handelRemoveCart: (title:string)=>void
}
const Cart = ({ cart, handelRemoveCart }:ICartProps) => {
    return (
    <div className="my-[80px] container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#179800]">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {cart.map((product) => {
            return (
              <div
                key={product.title}
                className="col-span-4 bg-white p-4 rounded-md shadow-md"
              >
                <img
                  src={product.productImg}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-yellow-500">Rating: {product.rating}</p>
                 <button onClick={() => handelRemoveCart(product.title)} className="bg-green-500 text-white px-6 py-2 my-2 rounded-md hover:bg-green-600"> Remove To Cart</button>
              </div>
            );
          })}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">
            Total: $
            {cart
              .reduce((total, product) => total + product.price, 0)
              .toFixed(2)}
          </h3>
        </div>
      )}
    </div>
    );
};

export default Cart;