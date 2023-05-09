import React from "react";
import { Link } from "react-router-dom";

export default function Category() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 items-center  gap-x-4 gap-y-3 m-10 ">
            <Link
                to="/drinks"
                className={`bg-red-500 p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>Drinks</h1>
            </Link>
            <Link
                to="/breakfast"
                className={`bg-amber-500 p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>Breakfast</h1>
            </Link>
            <Link
                to="/lunch"
                className={`bg-cyan-500 p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>Lunch</h1>
            </Link>
            <Link
                to="/dinner"
                className={`bg-green-800 p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>Dinner</h1>
            </Link>
        </div>
    );
}
