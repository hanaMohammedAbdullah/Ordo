import React, { useState } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const food = useSelector((state) => state.cart.cartItems);
    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button
                            className="text-gray-900 hover:text-gray-500 focus:outline-none focus:black-white"
                            aria-label="Open sidebar"
                            onClick={() => setShowLinks(!showLinks)}
                        >
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-gray-800 text-xl font-bold">
                            Food Orders
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <Link
                                to="/cart"
                                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                                aria-label="Cart"
                            >
                                <FaCartPlus className="h-6 w-6" />
                            </Link>
                            {food.length === 0 ? (
                                ""
                            ) : (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {food.length}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className={showLinks ? "block" : "hidden"}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/home"
                            className=" text-black block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/cart"
                            className="text-black-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                        >
                            My Ordered
                        </Link>
                        <Link
                            to="/foodpage"
                            className="text-black-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                        >
                            All Food
                        </Link>
                        <Link
                            to="/about"
                            className="text-black-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
