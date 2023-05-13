import React from "react";

function AddSubCategoryForm() {
    return (
        <form className="max-w-lg mx-auto my-4 p-4 ">
            <h2 className="text-lg font-semibold mb-4">
                Add a new sub category
            </h2>
            <div className="mb-4 ">
                <label className="block font-medium mb-2">Category Name</label>
                <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2  focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
            </div>

            <button
                type="submit"
                className="bg-yellow-500 w-full text-black font-bold rounded-md py-2 px-4 hover:bg-yellow-300 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}

export default AddSubCategoryForm;
