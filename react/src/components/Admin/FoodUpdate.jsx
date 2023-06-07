import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const FoodUpdate = ({ food, setShowModal }) => {
    const dispatch = useDispatch();
    // call
    // createing a state managment to give the value of note to the data before adding to the cart
    //    const nameref = useRef();
    // const nameref = useRef();

    // const deskNumber = useSelector((state) => state.desk.deskNumber);
    // const categoryName = nameref.current.value;

    // const textAreaRef = useRef(null);

    const addToCartHandler = async (e) => {
        // const data = {
        //     ...food,
        //     description: textAreaRef.current.value,
        //     deskNumber: deskNumber,
        // };
        setShowModal(false);
    };
    return (
        <>
            <div className="justify-center my-2 w-11/12  rounded     items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/3 h-screen  my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0  h-full rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Food Update
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="h-full overflow-auto">
                            <div className="relative p-6 flex-auto">
                                Food Name :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update Food Name "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Category Name :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update Category name  "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                SubCategory Name :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update SubCategory name  "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Food Price :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update Food Price "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Food availability :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="true or false "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Food Description :{" "}
                                <textarea
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update description "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Food time :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="text"
                                    placeholder="Enter your Update food time "
                                />
                            </div>
                            <div className="relative p-6 flex-auto">
                                Food Image :{" "}
                                <input
                                    // ref={nameref}
                                    className="border rounded-sm  w-11/12 m-3 border-yellow-400"
                                    type="file"
                                    placeholder="Enter your Update food image "
                                />
                            </div>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => addToCartHandler(false)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default FoodUpdate;
