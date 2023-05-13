import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function AddBox(props) {
    return (
        <Link
            to={props.link}
            className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-md shadow-md border "
        >
            <AiOutlinePlusCircle className="text-4xl text-yellow-500" />
            <p className="text-lg text-gray-700 font-medium mt-2">
                {props.title}
            </p>
        </Link>
    );
}

export default AddBox;
