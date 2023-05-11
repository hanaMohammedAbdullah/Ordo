import React from "react";

export const CartItem = () => {
    return (
        <div className="border rounded m-4 p-1">
            <div className="flex content-evenly ">
                <div className=" w-1/3 h-fit  m-0 ">
                    <img
                        className="w-fit h-fit border rounded "
                        // height="100"
                        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                        alt=""
                    />
                </div>
                <div className="flex  first-letter: flex-col  items-center ml-2 w-1/3 justify-center ">
                    <h2 className="text-lg font-semibold	 text-center">
                        Food Name
                    </h2>
                    <p className="text-slate-500 text-center	justify-end ">
                        review
                    </p>
                    <div className="flex  border items-center justify-center text-center  border-gray-700 rounded   w-fit">
                        <button className=" mr-2   rounded w-6 bg-orange-500 border-gray-400">
                            +
                        </button>
                        9
                        <button className="ml-2   rounded w-6 bg-orange-500 border-gray-400">
                            -
                        </button>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col  justify-center ">
                    <h2 className="text-lg font-semibold text-right	 mr-4 items-end">
                        Total
                    </h2>
                    <p className="text-slate-500 text-right mr-4	items-end ">
                        $120
                    </p>
                </div>
            </div>
        </div>
    );
};
