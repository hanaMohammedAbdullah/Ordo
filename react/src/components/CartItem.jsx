import React from "react";

export const CartItem = () => {
    return (
        <div className="border rounded m-4">
            <div className="flex content-evenly ">
                <span className="flex flex-col w-fit ">
                    <img
                        className="w-1/3 "
                        // height="100"
                        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                        alt=""
                    />
                </span>
                <div className="flex flex-col ">
                    <h2 className="text-lg font-semibold	">User Name</h2>
                    <p className="text-slate-500	 ">review</p>
                </div>
                <div className="flex flex-col ">
                    <h2 className="text-lg font-semibold	">Total</h2>
                    <p className="text-slate-500	 ">$120</p>
                </div>
            </div>
        </div>
    );
};
