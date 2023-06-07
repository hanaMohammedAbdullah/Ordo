import React from "react";
import Layout from "../Layouts/Layout";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../service/apiServer";
import { addToCheckout } from "../store/slice/checkoutSlice";

export const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const handleBack = () => {
        navigate(-1);
    };
    const CheckoutHandler = async () => {
        const getShowCart = await getCarts(cart[0].deskNumber);
        console.log("at cart page repond of the post show cart ", getShowCart);
        getShowCart.map((item) => dispatch(addToCheckout(item)));
        setTimeout(() => {
            navigate("/checkout");
        }, 1000);
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
                                My Basket
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <div className="relative">
                                <Link
                                    to={"/cart"}
                                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                                    aria-label="Cart"
                                >
                                    <FaCartPlus className="h-6 w-6" />
                                </Link>
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
            <div className="w-full">
                <div className="  border-2 rounded">
                    {cart.length === 0 ? (
                        <div className="	 text-center py-60">
                            <h1 className="text-gray-800  w-full text-2xl  font-bold     ">
                                No Orders
                            </h1>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                quantity={item.foodQuantity}
                                price={item.price}
                                feedbacks={item.feedbacks_avg_rating}
                                name={item.name}
                                image={item.image_url}
                                item={item}
                            />
                        ))
                    )}
                </div>
                {/* total section */}

                <div className="flex  flex-col text-center w-11/12 p-2 items-center mb-2">
                    <button
                        onClick={CheckoutHandler}
                        className="bg-yellow-500 w-full  text-white p-4  rounded "
                    >
                        Checkout
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
