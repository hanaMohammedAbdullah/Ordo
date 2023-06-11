import React from "react";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OrderedCart } from "../components/OrderedCart";

export const OrderPage = () => {
    const navigate = useNavigate();
    const order = useSelector((state) => state.order.orderItems);
    const handleBack = () => {
        navigate(-1);
    };

    console.log("order in order page", order);
    const foods = order[0].foods;

    return (
        <div>
            <nav className="bg-gray-100 ">
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
                                My Order
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
                                {order.length === 0 ? (
                                    ""
                                ) : (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {order.length}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full  min-h-screen">
                {/* order section */}

                <div className="m-2 h-5/6 border-2 rounded">
                    {order && order.length === 0 ? (
                        <div className="	 text-center py-60">
                            <h1 className="text-gray-800  w-full text-2xl  font-bold     ">
                                No Orders
                            </h1>
                        </div>
                    ) : (
                        foods.map((item) => (
                            <OrderedCart
                                key={item.id}
                                id={item.id}
                                arg={item.arg}
                                time={item.preparation_time}
                                quantity={item.foodQuantity}
                                status={order.status}
                                price={item.price}
                                name={item.name}
                                item={order}
                            />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
