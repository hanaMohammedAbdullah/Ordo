import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

function AddCategoryForm() {
    const [categoryName, setCategoryName] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!", categoryName, file);
    };

    return (
        <form className="max-w-md mx-auto my-4 p-4 ">
            <h2 className="text-lg font-semibold mb-4">Add a new category</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">Category Name</label>
                <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2">Upload Image</label>
                <div className="flex items-center justify-center w-full h-24  border-2 border-dashed p-2 shadow-lg border-yellow-300 rounded-md">
                    {file ? (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Selected file"
                            className="h-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                            <AiOutlineUpload className="w-8 h-8" />
                            <span>Click or drag an image file to upload</span>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <button
                type="submit"
                className="bg-yellow-500 w-full text-black font-bold rounded-md py-2 px-4 hover:bg-yellow-300 transition-colors duration-300"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
}

export default AddCategoryForm;
