import React from "react";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  return (
    <Link
      to={"food-details"}
      className="bg-white rounded-md overflow-hidden shadow-lg px-2 my-2"
      id={props.id}
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-24 sm:48 object-cover rounded-md"
      />
      <div className="py-2 flex justify-between text-xs font-semibold">
        <h2>
          {props.title.slice(0, 15) + (props.title.length > 15 ? "..." : "")}
        </h2>
        <span className="text-yellow-500">{props.price}$</span>
      </div>
    </Link>
  );
};

export default FoodCard;
