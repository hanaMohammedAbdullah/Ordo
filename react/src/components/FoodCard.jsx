import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ imageSrc, name, price, id }) => {



    
    return (
        <Link
            // add id to the path
            to={`/foodDetail/${id}`}
            className="bg-white rounded-md overflow-hidden shadow-lg px-2 m-2"
        >
            <img
                src={imageSrc}
                alt={name}
                className="w-full h-24 sm:48 object-cover rounded-md"
            />
            <div className="py-2 flex justify-between text-lg font-semibold">
                <h2>{name}</h2>
                <span className="text-yellow-500">{price}$</span>
            </div>
        </Link>
    );
};

export default FoodCard;
