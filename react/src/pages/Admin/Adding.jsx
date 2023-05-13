import React from "react";
import { DashNav } from "../../components/Admin/DashNav";
import AddBox from "../../components/Admin/AddBox";

export default function Adding() {
    return (
        <div className="flex">
            <DashNav />
            <div className="flex justify-center items-center w-full space-x-6 ">
                <AddBox title={"Add new category"} link={"addNewCategory"} />
                <AddBox
                    title={"Add new sub category"}
                    link={"addNewSubCategory"}
                />
                <AddBox title={"Add new food"} link={"addNewFood"} />
            </div>
        </div>
    );
}
