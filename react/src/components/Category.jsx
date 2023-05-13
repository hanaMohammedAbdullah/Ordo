import React from "react";
import { Link } from "react-router-dom";

export default function Category({ id, name }) {
    const getFoodClass = () => {
        let colorClass = "";

        switch (id % 4) {
            case 0:
                colorClass = "bg-red-500";
                break;
            case 1:
                if (name === "lunch") colorClass = "bg-green-500";
                if (name === "suhhur") colorClass = "bg-sky-500";
                if (name === "drinks") colorClass = "bg-orange-500";
                break;
            case 2:
                colorClass = "bg-blue-500";
                break;
            case 3:
                colorClass = "bg-yellow-500";
                break;

            default:
                colorClass = "";
                break;
        }
        return colorClass;
    };

    let colorClass = getFoodClass();
    return (
        <div className="flex flex-col item-center md:grid md:grid-cols-2 items-center  gap-x-4 gap-y-3 m-10 ">
            <Link
                to={`/category/${name}`}
                className={`${colorClass}  p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>{name}</h1>
            </Link>
        </div>
    );
}
