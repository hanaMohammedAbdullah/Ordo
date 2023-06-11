import React from "react";
import { Link } from "react-router-dom";

export default function Category({ id, name }) {
    const capilatlizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const getFoodClass = () => {
        let background = "";

        if (capilatlizedName === "Breakfast")
            background =
                "https://cdn.pixabay.com/photo/2018/03/10/18/42/food-3214904_1280.jpg";
        if (capilatlizedName === "Lunch")
            background =
                "https://cdn.pixabay.com/photo/2019/02/25/03/57/hot-pot-4018869_1280.jpg";
        if (capilatlizedName === "Dessert")
            background =
                "https://cdn.pixabay.com/photo/2018/01/12/16/31/nougat-3078581_1280.jpg";
        if (capilatlizedName === "Dinner")
            background =
                "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg";
        if (capilatlizedName === "Suhur")
            background =
                "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg";
        if (capilatlizedName === "Suhhur")
            background =
                "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg";
        if (capilatlizedName === "Drinks")
            background =
                "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg";
        else if (background === "")
            background =
                "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg";
        return background;
    };

    let background = getFoodClass();
    return (
        //     <div className="flex w-2/3 flex-col item-center md:grid  md:grid-cols-2 items-center  gap-x-4 gap-y-3 m-7 ">
        //     <Link
        //         to={`/category/${id}`}
        //         className={`${colorClass}  p-8 w-full text-lg font-bold text-white`}
        //     >
        //         <h1>{name}</h1>
        //     </Link>
        // </div>
        <div className="flex  items-center justify-center ">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                <Link to={`/category/${id}`}>
                    <div className="m-4 rounded group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className=" h-fit w-fit">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src={background}
                                alt={capilatlizedName}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                {capilatlizedName}
                            </h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
