import React from "react";

function ProfileInfo(props) {
    return (
        <div className="flex ">
            <img
                src={props.imageSrc}
                alt="Profile"
                className="rounded-full h-20 w-20 mr-4"
            />
            <div className="flex flex-col">
                <span className="text-lg font-bold">{props.name}</span>
                <span className="text-gray-600 text-sm">
                    {props.phoneNumber}
                </span>
                <span className="text-gray-600 text-sm">{`Room: ${props.roomNumber}`}</span>
            </div>
        </div>
    );
}

export default ProfileInfo;
