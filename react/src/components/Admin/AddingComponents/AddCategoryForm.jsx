import { useRef, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { setNewCategory } from "../../../service/apiServer";

function AddCategoryForm() {
    // const [categoryName, setCategoryName] = useState("");
    const nameref = useRef(null);
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState(false);

    const handleSubmit = async () => {
        const categoryName = nameref.current.value;
        setCategory(true);
        const category = await setNewCategory(categoryName);
        console.log("Submitted!", category);
    };

    return (
        <div
            className={`flex flex-col content-center justify-center items-center m-auto `}
        >
            <div
                className={`${
                    category ? "visible" : "hidden"
                } border-green-700   p-4 shadow-md   text-center text-green-700  `}
            >
                Category added successfully!
            </div>

            <form
                className="max-w-md mx-auto my-4 p-4  "
                onSubmit={handleSubmit}
            >
                <h2 className="text-lg font-semibold mb-4">
                    Add a new category
                </h2>
                <div className="mb-4">
                    <label className="block font-medium mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-lg border  p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        ref={nameref}
                    />
                </div>
                {/* <div className="mb-4">
                    <label className="block font-medium mb-2">
                        Upload Image
                    </label>
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
                                <span>
                                    Click or drag an image file to upload
                                </span>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        // onChange={(e) => setFile(e.target.files[0])}
                    />
                </div> */}
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

export default AddCategoryForm;
