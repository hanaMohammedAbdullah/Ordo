import React from "react";
import { Link } from "react-router-dom";

export default function Category({ id, name }) {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 items-center  gap-x-4 gap-y-3 m-10 ">
            <Link
                to={`/category/${id}`}
                className={`bg-cyan-500 p-10 w-full text-2xl font-bold text-white`}
            >
                <h1>{name}</h1>
            </Link>
        </div>
    );
}
