import React from "react";
import { AnimatedLine } from "./AnimationLine";

export const OrderedCart = ({ name, price, quantity, item }) => {
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const capitalized = capitalizeFirstLetter(name);

    const Total = price * quantity;
    return (
        <div className="border  rounded m-4 py-4  shadow">
            <div className="flex content-evenly ">
                <div className="flex  first-letter: flex-col  items-start ml-2 w-1/2 justify-start ">
                    <h2 className="text-lg font-semibold	 text-center">
                        {capitalized}
                    </h2>

                    <div className="flex w-full mt-4">
                        <AnimatedLine totalTime={100} />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col  justify-center ">
                    <h2 className="text-lg font-semibold text-right	 mr-4 items-end">
                        Status : {item?.status}
                    </h2>
                    <p className="text-slate-500 text-right mr-4	items-end ">
                        {Total} mint
                    </p>
                    <button
                        // onClick={""}
                        className="m-3 border bg-orange-200 rounded"
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
