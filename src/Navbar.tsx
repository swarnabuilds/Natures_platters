import { FaCartPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo from './assets/img/nav-logo.png';
import type { IPopularProduct } from "./components";

interface NavbarProps {
  cart: IPopularProduct[];
}
const Navbar = ({cart}:NavbarProps) => {
    return (
        <div className="border-b border-gray-300">
            <nav className="flex justify-between gap-4 container mx-auto py-4 ">
                <img src={logo} className="w-[120px] h-[60px]" alt="" />
                <ul className="flex gap-5 items-center text-xl font-semibold">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                </ul>

                <div className="flex gap-4 items-center">
                <IoSearchSharp />

                <FaCartPlus />


                <span className="bg-[#179800] text-white px-2 py-1 rounded-full text-sm">
                    {cart.length}
                </span>

                <button className="bg-blue-500 text-white px-6 text-xl  py-2 rounded-md hover:bg-blue-600 hover:text-orange-500 hover:scale-110 transition-transform duration-300">
                    Login
                </button>
                <button className="bg-green-500 text-white px-6 text-xl  py-2 rounded-md hover:bg-green-600">
                    Signup
                </button>
                </div>
            </nav>
    </div>
    );
};

export default Navbar;