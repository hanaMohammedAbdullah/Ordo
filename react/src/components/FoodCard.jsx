import React from "react";

const FoodCard = ({ imageSrc, name, price }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg px-2 my-2">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-24 sm:48 object-cover rounded-md"
      />
      <div className="py-2 flex justify-between text-lg font-semibold">
        <h2>{name}</h2>
        <span className="text-yellow-500">{price}$</span>
      </div>
    </div>
  );
};

export default FoodCard;
