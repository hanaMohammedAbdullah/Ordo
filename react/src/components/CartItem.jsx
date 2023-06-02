import React from "react";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
} from "../store/slice/cartSlice";

export const CartItem = ({ name, price, feedbacks, quantity, item, image }) => {
    // function capitalizeFirstLetter(word) {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    // }

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeFromCart(item));
    };
    const handleIncrease = () => {
        dispatch(increaseQuantity(item));
    };
    const handleDecrease = () => {
        dispatch(decreaseQuantity(item));
    };

    // const capitalized = capitalizeFirstLetter(name);

    const Total = price * quantity;
    return (
        <div className="border rounded m-4 p-1">
            <div className="flex content-evenly ">
                <div className=" w-1/3 h-fit  m-0 ">
                    <img
                        className="w-fit h-fit border rounded "
                        // height="100"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="flex  first-letter: flex-col  items-center ml-2 w-1/3 justify-center ">
                    <h2 className="text-lg font-semibold	 text-center">
                        {name}
                    </h2>
                    {feedbacks === null ? (
                        ""
                    ) : (
                        <p className="text-slate-500 text-center	justify-end ">
                            {feedbacks} review
                        </p>
                    )}
                    <div className="flex">
                        <div className="flex  border items-center justify-center text-center  border-gray-700 rounded   w-fit">
                            <button
                                onClick={handleIncrease}
                                className=" mr-2   rounded w-6 bg-orange-500 border-gray-400"
                            >
                                +
                            </button>
                            {quantity}
                            <button
                                onClick={handleDecrease}
                                className="ml-2   rounded w-6 bg-orange-500 border-gray-400"
                            >
                                -
                            </button>
                        </div>
                        <button
                            className="ml-2   text-red-600 border-0"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col  justify-center ">
                    <h2 className="text-lg font-semibold text-right	 mr-4 items-end">
                        Total
                    </h2>
                    <p className="text-slate-500 text-right mr-4	items-end ">
                        ${Total}
                    </p>
                </div>
            </div>
        </div>
    );
};
