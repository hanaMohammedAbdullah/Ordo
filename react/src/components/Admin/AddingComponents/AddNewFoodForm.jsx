import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";

function AddNewFoodForm() {
    const categories = [
        "Pizza",
        "Burgers",
        "Tacos",
        "Sushi",
        "Italian",
        "Chinese",
        "Thai",
        "Mexican",
    ];
    const subCategories = ["Veg", "Non-Veg"];
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleSubCategoryChange = (event) => {
        setSelectedSubCategory(event.target.value);
    };

    return (
        <form className="max-w-md mx-auto my-4 p-4 ">
            <h2 className="text-lg font-semibold mb-4">Add New Food to menu</h2>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                    Food Name{" "}
                </label>
                <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter category name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                    Food Price
                </label>
                <input
                    type="number"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block font-medium mb-2">
                    Food category
                </label>
                <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="subCategory" className="block font-medium mb-2">
                    Food subCategory
                </label>
                <select
                    id="subCategory"
                    name="subCategory"
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <option value="">Select a sub category</option>
                    {subCategories.map((subCategory) => (
                        <option key={subCategory} value={subCategory}>
                            {subCategory}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">Time</label>
                <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter time to prepare food"
                />
            </div>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                    Upload Image
                </label>
                <div className="flex items-center justify-center w-full h-24  border-2 border-dashed p-2 shadow-lg border-yellow-300 rounded-md">
                    <div className="flex flex-col items-center justify-center text-gray-400">
                        <AiOutlineUpload className="w-8 h-8" />
                        <span>Click or drag an image file to upload</span>
                    </div>
                </div>
                <input type="file" accept="image/*" className="hidden" />
            </div>
            <button
                type="submit"
                className="bg-yellow-500 w-full text-black font-bold rounded-md py-2 px-4 hover:bg-yellow-800 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}

export default AddNewFoodForm;
