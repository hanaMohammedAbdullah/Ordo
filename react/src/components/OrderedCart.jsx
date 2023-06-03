import React from "react";
import { AnimatedLine } from "./AnimationLine";
import { useDispatch } from "react-redux";
import { cancelOrderCart, getOrderCart } from "../service/apiServer";
import { removeFromOrder } from "../store/slice/checkoutSlice";
import { addToOrder } from "../store/slice/orderSlice";

export const OrderedCart = ({
    id,
    name,
    price,
    quantity,
    item,
    time,
    status,
    arg,
}) => {
    // function capitalizeFirstLetter(word) {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    // }
    console.log("this is item in ordercart ", arg);

    // const capitalized = capitalizeFirstLetter(name);
    const dispatch = useDispatch();
    const handleDelete = async () => {
        console.log(
            "this is item in  csbdcjhas jc   ias ci asi ordercart ",
            arg
        );
        dispatch(removeFromOrder(arg));
        await cancelOrderCart(item[0].cart_id);
        const getOrders = await getOrderCart();
        dispatch(addToOrder(getOrders));
    };

    return (
        <div className="border  rounded m-4 py-4  shadow">
            <div className="flex content-evenly ">
                <div className="flex  first-letter: flex-col  items-start ml-2 w-1/2 justify-start ">
                    <h2 className="text-lg font-semibold	 text-center">
                        {name}
                    </h2>

                    <div className="flex w-full mt-4">
                        <AnimatedLine totalTime={100} />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col  justify-center ">
                    <h2 className="text-lg font-semibold text-right	 mr-4 items-end">
                        Status : {item[0].status}
                    </h2>
                    <p className="text-slate-500 text-right mr-4	items-end ">
                        {item[0].preparation_time} mint
                    </p>
                    <button
                        onClick={handleDelete}
                        className="m-3 border bg-orange-200 rounded"
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
