import React from "react";
import Layout from "../Layouts/Layout";
import { FaCartPlus } from "react-icons/fa";
import ItemQuantity from "../components/ItemQuantity";
export default function FoodDetails(props) {
  //

  return (
    <Layout title={"Food detail"}>
      <img
        className="w-auto h-72 object-cover mx-auto px-2"
        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
        alt="food"
      />
      <div className="flex flex-col  my-2 mx-6">
        {/* title */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-center">Chicken</h1>
          <span className="text-2xl font-semibold text-yellow-700">price: $2</span>
        </div>

        {/* description */}
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, quae voluptates quibusdam voluptatibus
          accusantium quas quidem natus quos. Quisquam, quae. Quisquam
          voluptate, quod, quia, quae voluptates quibusdam voluptatibus
          accusantium quas quidem natus quos. Quisquam, quae.
        </p>
        {/* quantity */}
        <div className="flex justify-around items-center my-6  mx-2 ">
          <span className="text-3xl font-bold">x {2}</span>
          <ItemQuantity />
        </div>
        {/*price */}
        <div className="flex justify-between items-center mx-6">
          <span className="text-2xl font-semibold text-yellow-700">
            Total : $12
          </span>
          <button
            
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <span>Add to cart</span> <FaCartPlus />
          </button>
        </div>
      </div>
    </Layout>
  );
}
