import React, { useRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
import { setNewFood } from "../../../service/apiServer";

function AddNewFoodForm() {
    const nameref = useRef(null);
    const priceref = useRef(null);
    const subnameref = useRef(null);
    const catnameref = useRef(null);
    const descriptionref = useRef(null);
    const availabilityref = useRef(null);
    const timeref = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    console.log("this is image ", selectedFile);

    const handleSubmit = async (e) => {
        const name = nameref.current.value;
        const price = priceref.current.value;
        const subcategoryName = subnameref.current.value;
        const categoryName = catnameref.current.value;
        const description = descriptionref.current.value;
        const availability = availabilityref.current.value;
        const time = timeref.current.value;
        let image = selectedFile;
        const category = await setNewFood(
            name,
            price,
            subcategoryName,
            categoryName,
            description,
            availability,
            time,
            image
        );

        console.log("Submitted!", category);
    };
    return (
        <form className="max-w-md mx-auto my-4 p-4 " onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-4">Add New Food to menu</h2>
            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">
                    Food Name{" "}
                </label>
                <input
                    ref={nameref}
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
                    ref={priceref}
                    type="number"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block font-medium mb-2">
                    Food category
                </label>
                <input
                    ref={catnameref}
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subCategory" className="block font-medium mb-2">
                    Food subCategory
                </label>
                <input
                    ref={subnameref}
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subCategory" className="block font-medium mb-2">
                    Food availability
                </label>
                <input
                    ref={availabilityref}
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subCategory" className="block font-medium mb-2">
                    describe
                </label>
                <textarea
                    ref={descriptionref}
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter food price"
                />
            </div>

            <div className="mb-4">
                <label className="block text-xs font-bold mb-2">Time</label>
                <input
                    ref={timeref}
                    type="number    "
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
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files[0].name)}
                    className="visible"
                />
            </div>
            <button
                // onClick={e => fileInput.current && fileInput.current.click()}
                className="bg-yellow-500 w-full text-black font-bold rounded-md py-2 px-4 hover:bg-yellow-800 transition-colors duration-300"
            >
                Submit
            </button>
        </form>
    );
}

export default AddNewFoodForm;
