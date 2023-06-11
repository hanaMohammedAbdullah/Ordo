import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ imageSrc, name, price, id, deskNum }) => {
    const capilatlizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const posthandler = () => {
        console.log("post handler");
    };

    return (
        
        <Link to={`/foodDetail/${id}`}>
            <div className="w-full h-24  m-4 rounded group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className=" h-fit w-fit">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={imageSrc}
                        alt={capilatlizedName}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute  inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 text-yellow-500 hover:visible">
                    <h1 className="font-dmserif text-lg font-bold text-white">
                        {capilatlizedName}
                    </h1>
                    <p className="Class
Properties
Preview
text-transparent">{deskNum}</p>
                    <span>{price}$</span>
                </div>
            </div>
        </Link>
        // <Link
        //     // add id to the path
        //     to={`/foodDetail/${id}`}
        //     className="bg-white rounded-md overflow-hidden shadow-lg px-2 m-2"
        // >
        //     <img
        //         src={imageSrc}
        //         alt={name}
        //         className="w-full h-24 sm:48 object-cover rounded-md"
        //     />
        //     <div className="py-2 flex justify-between text-lg font-semibold">
        //         <h2>{name}</h2>
        //         <span className="text-yellow-500">{price}$</span>
        //     </div>
        // </Link>
    );
};

export default FoodCard;
