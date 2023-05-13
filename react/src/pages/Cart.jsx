import React from "react";
import Layout from "../Layouts/Layout";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";

export const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cartItems);

    console.log("cart", cart);
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <nav className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button
                                className="text-gray-900 hover:text-gray-500 focus:outline-none focus:black-white"
                                aria-label="Open sidebar"
                                onClick={handleBack}
                            >
                                <FaArrowLeft className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-gray-800 text-xl font-bold">
                                My Orders
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <div className="relative">
                                <button
                                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                                    aria-label="Cart"
                                >
                                    <FaCartPlus className="h-6 w-6" />
                                </button>
                                {cart.length === 0 ? (
                                    ""
                                ) : (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {cart.length}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <div className="flex    border-2 rounded">
                    {cart.length === 0 ? (
                        <div className="flex justify-center text-center items-center">
                            <h1 className="text-gray-800p-20  text-2xl text-center font-bold mx-2">
                                No Orders
                            </h1>
                        </div>
                    ) : (
                        <CartItem />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
