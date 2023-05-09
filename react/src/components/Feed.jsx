import { useState } from "react";
import Rating from "./Rating";

const Feed = ({ setShowModal }) => {
    const [rating, setRating] = useState(0);
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Note</h3>
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
                        <div className="px-3 py-4">
                            <p>
                                Name :{" "}
                                <input
                                    className="border w-11/12 border-gray-400 rounded-md"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </p>
                            <p>
                                Rate{" "}
                                <Rating rating={rating} setRating={setRating} />
                            </p>
                            <div className="relative p-6 flex-auto">
                                <textarea
                                    name="content"
                                    id="content"
                                    placeholder="Enter your note here"
                                    // value={content}
                                    // onChange={}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-11/12 sm:text-sm border-gray-400 rounded-md "
                                    rows="3"
                                ></textarea>
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
                                onClick={() => setShowModal(false)}
                            >
                                Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Feed;
