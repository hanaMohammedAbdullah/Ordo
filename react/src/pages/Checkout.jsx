import React from "react";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CheckoutCart } from "../components/CheckoutCart";
import { getOrderCart, setOrderCart } from "../service/apiServer";
import { addToOrder } from "../store/slice/orderSlice";

export const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkout = useSelector((state) => state.checkout.checkoutItems);
    const desknum = useSelector((state) => state.desk.deskNumber);
    const desk = parseInt(desknum);
    const handleBack = () => {
        navigate(-1);
    };

    const orderHandler = async () => {
        checkout.map(
            async (item) =>
                await setOrderCart(
                    item.food_id,
                    item.desk_id,
                    item.quantity,
                    item?.note
                )
        );
        const getOrders = await getOrderCart();
        console.log("getOrders", getOrders);
        const getOrder = getOrders;
        dispatch(addToOrder(getOrder));
        navigate("/order");
    };
    const totalPrice = checkout.reduce((accumulator, foodItem) => {
        const { quantity, price } = foodItem;
        return accumulator + quantity * price;
    }, 0);

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
                                My Checkout
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
                                {checkout.length === 0 ? (
                                    ""
                                ) : (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {checkout.length}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full">
                <div className="  border-2 rounded">
                    {checkout.length === 0 ? (
                        <div className="	 text-center py-60">
                            <h1 className="text-gray-800  w-full text-2xl  font-bold     ">
                                No Orders
                            </h1>
                        </div>
                    ) : (
                        checkout.map((item) => (
                            <CheckoutCart
                                key={item.id}
                                id={item.id}
                                quantity={item.quantity}
                                price={item.price}
                                image={item.file_name}
                                media_id={item.media_id}
                                feedbacks={item.feedbacks_avg_rating}
                                name={item.name}
                            />
                        ))
                    )}
                </div>
                {/* total section */}

                <div className="flex mt-12 flex-col w-11/12 p-2 items-center mb-2">
                    <hr className="w-[100%] text-lg font-bold  bg-gray-300 h-1 shadow-md" />
                    <div className="flex my-5  justify-between w-full  ">
                        <div className="text-gray-800 text-xl font-bold  ">
                            Total:
                        </div>
                        <div className="text-gray-800 text-xl font-bold     ">
                            ${totalPrice}
                        </div>
                    </div>

                    <button
                        // to={"/order"}
                        onClick={orderHandler}
                        className="bg-yellow-500 w-full text-center text-white p-4  rounded "
                    >
                        Order
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
