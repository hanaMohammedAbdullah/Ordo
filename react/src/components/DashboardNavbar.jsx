import React from "react";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const DashboardNavbar = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div>
            {" "}
            <nav className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button
                                className="text-gray-900 hover:text-gray-500 focus:outline-none focus:black-white"
                                aria-label="Open sidebar"
                                onClick={handleBack}
                            >
                                <FaArrowLeft className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-gray-800 text-xl font-bold">
                                More Details
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <div className="relative">
                                <button
                                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                                    aria-label="Cart"
                                >
                                    <FaCartPlus className="h-6 w-6" />
                                </button>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
