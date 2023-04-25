import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="uppercase font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex">
              <input
                className="bg-gray-100 rounded-l py-2 px-4 w-full border-2 border-orange-400 text-black focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                className="bg-orange-400 text-white rounded-r px-4 py-2 uppercase font-bold  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0 text-center">
            <h3 className="uppercase font-bold mb-4">About Us</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              euismod quam nec nisi facilisis, vel pulvinar leo consectetur.
            </p>
            <p className="mb-4">
              Donec vestibulum dapibus leo, at malesuada neque commodo in. Nulla
              vitae leo sapien. Nulla commodo efficitur elit, et blandit nulla
              dictum a.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
            <h3 className="uppercase font-bold mb-4">Connect With Us</h3>
            <div className="flex mb-4">
              <a
                className="text-white mr-4 hover:text-gray-400"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="text-white mr-4 hover:text-gray-400"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="text-white mr-4 hover:text-gray-400"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="text-white mr-4 hover:text-gray-400"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
