import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
} from "../store/slice/cartSlice";

export const CheckoutCart = ({
    name,
    price,
    feedbacks,
    quantity,
    item,
    image,
}) => {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const capitalized = capitalizeFirstLetter(name);

    const Total = price * quantity;
    return (
        <div className="border  rounded m-4 p-1 shadow">
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
                        {capitalized}
                    </h2>
                    {feedbacks === null ? (
                        ""
                    ) : (
                        <p className="text-slate-500 text-center	justify-end ">
                            {feedbacks} review
                        </p>
                    )}
                    <div className="flex">
                        <div className="flex  items-center justify-center text-center    w-fit">
                            x {quantity}
                        </div>
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
