import React, { useState } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="text-gray-900 hover:text-gray-500 focus:outline-none focus:text-white"
              aria-label="Open sidebar"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center">
            <h1 className="text-gray-800 text-xl font-bold">Food Orders</h1>
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
        <div className={showLinks ? "block" : "hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
