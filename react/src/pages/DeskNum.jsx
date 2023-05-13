import React, { useRef, useState } from "react";
import Layout from "../Layouts/Layout";
import { Link, useNavigate } from "react-router-dom";

export const DeskNum = () => {
    const refc = useRef(null);
    const navigate = useNavigate();
    // get the name from the desk inputh thenn navogate using react nagivation
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/desk${refc.current.value}`);
    };

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="flex flex-col justify-center content-center  h-96">
                            <div className="pt-10 px-4 ">
                                <h1 className="text-center  text-2xl font-bold text-yellow-500">
                                    Opps a problem occur
                                </h1>

                                <h1 className="italic my-2">
                                    Enter your desk number
                                </h1>
                                <div className="flex flex-col mx-auto">
                                    <input
                                        ref={refc}
                                        id="deskNum"
                                        type="text"
                                        className="border-2 w-10/12 border-gray-300 bg-white h-10 px-5 pr-7 rounded-lg text-sm focus:outline-none"
                                        placeholder="Enter your desk number"
                                    />
                                    <button
                                        className="m-2   h-16 w-36 bg-orange-400  flex 	items-center	 justify-center	rounded-lg mx-auto my-10 "
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
