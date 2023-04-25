import React from "react";

export default function ItemQuantity() {
  return (
    <div className="w-20 sm:w-28 ">
      <div className="flex flex-row h-10 w-full rounded-lg relative   mt-1">
        <button
          //onClick={() => dispatch(decrementQuantity(props.id))}
          className=" bg-yellow-500 text-black hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>

        <span
          className=" px-2 focus:outline-none text-center  bg-gray-100 font-semibold text-md text-black focus:text-black   flex items-center  outline-none"
          name="custom-input-number"
        >
          {/* {props.quantity} */}2
        </span>
        <button
          // onClick={() => dispatch(incrementQuantity(props.id))}
          className="bg-yellow-500 text-black  hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
