import React from "react";
import { DashNav } from "../../../components/Admin/DashNav";
import AddSubCategoryForm from "../../../components/Admin/AddingComponents/AddSubCategoryForm";
export default function AddNewSubCategory() {
    return (
        <div className="flex">
            <DashNav />
            <div className="flex justify-center w-full"><AddSubCategoryForm /></div>
            
        </div>
    );
}
