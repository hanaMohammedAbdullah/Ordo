import React from "react";
import { DashNav } from "../components/DashNav";
import { Link } from "react-router-dom";

export const ModalDatabases = () => {
    return (
        <div>
            {" "}
            <div className="flex">
                <DashNav />
                <div className="container mx-auto mt-12">
                    <div className="mt-1 text-4xl mb-14 text-center  font-semibold text-gray-900">
                        Add new Category
                    </div>
                    <div className="grid m-2 grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <Link
                            to={"/"}
                            className="w-full m-2 px-4 py-5 bg- text-yellow-500 text-6xl font-extrabold  text-center rounded-lg shadow"
                        >
                            +
                            <div className="mt-1 text-lg  font-semibold text-gray-900">
                                Add new Food
                            </div>
                        </Link>
                        <Link
                            to={"/"}
                            className="w-full m-2 px-4 py-5 bg- text-yellow-500 text-6xl font-extrabold  text-center rounded-lg shadow"
                        >
                            +
                            <div className="mt-1 text-lg  font-semibold text-gray-900">
                                Add new Category
                            </div>
                        </Link>
                        <Link
                            to={"/"}
                            className="w-full m-2 px-4 py-5 bg- text-yellow-500 text-6xl font-extrabold  text-center rounded-lg shadow"
                        >
                            +
                            <div className="mt-1 text-lg  font-semibold text-gray-900">
                                Add new Subcategory
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
