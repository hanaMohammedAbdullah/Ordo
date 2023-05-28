import React, { useRef, useState } from "react";
import { setNewSubCategory } from "../../../service/apiServer";

function AddSubCategoryForm() {
    const nameref = useRef(null);
    const subnameref = useRef(null);
    const [file, setFile] = useState(null);
    const [categoryNotidication, setCategoryNotidication] = useState(false);

    const handleSubmit = async () => {
        const categoryName = nameref.current.value;
        const subCategoryName = subnameref.current.value;
        setCategoryNotidication(true);
        console.log(
            "categoryName",
            categoryName,
            "subCategoryName",
            subCategoryName
        );
        const category = await setNewSubCategory(categoryName, subCategoryName);
        console.log("Submitted!", category);
    };

    return (
        <div
            className={`flex flex-col content-center justify-center items-center m-auto `}
        >
            <div
                className={`${
                    categoryNotidication ? "visible" : "hidden"
                } border-green-700   p-4 shadow-md   text-center text-green-700  `}
            >
                SubCategory added successfully!
            </div>

            <form
                className="max-w-lg mx-auto my-4 p-4 "
                onSubmit={handleSubmit}
            >
                <h2 className="text-lg font-semibold mb-4">
                    Add a new sub category
                </h2>
                <div className="mb-4 ">
                    <label className="block font-medium mb-2">
                        sub Category Name
                    </label>
                    <input
                        ref={nameref}
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-lg border  p-2  focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>
                <div className="mb-4 ">
                    <label className="block font-medium mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        ref={subnameref}
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
        </div>
    );
}

export default AddSubCategoryForm;
