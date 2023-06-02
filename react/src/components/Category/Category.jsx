import React from "react";
import { Link } from "react-router-dom";

export default function Category({ id, name }) {
    const getFoodClass = () => {
        let colorClass = "";

        switch (id % 2) {
            case 0:
                if (name === "breakfast") colorClass = "bg-green-500";
                if (name === "lunch") colorClass = "bg-purple-500";
                if (name === "dinner") colorClass = "bg-red-500";
                if (name === "suhhur") colorClass = "bg-blue-500";
                if (name === "drinks") colorClass = "bg-orange-500";
                break;
            case 1:
                if (name === "breakfast") colorClass = "bg-green-500";
                if (name === "lunch") colorClass = "bg-purple-500";
                if (name === "dinner") colorClass = "bg-red-500";
                if (name === "suhhur") colorClass = "bg-blue-500";
                if (name === "drinks") colorClass = "bg-orange-500";
                break;

            default:
                colorClass = "";
                break;
        }
        return colorClass;
    };

    let colorClass = getFoodClass();
    return (
        <div className="flex w-fit flex-col item-center md:grid  md:grid-cols-2 items-center  gap-x-4 gap-y-3 m-7 ">
            <Link
                to={`/category/${id}`}
                className={`${colorClass}  p-8 w-full text-lg font-bold text-white`}
            >
                <h1>{name}</h1>
            </Link>
        </div>
    );
}
