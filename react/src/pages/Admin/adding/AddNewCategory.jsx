import React from "react";
import { DashNav } from "../../../components/Admin/DashNav";
import AddCategoryForm from "../../../components/Admin/AddingComponents/AddCategoryForm";

export default function AddNewCategory() {
    return (
        <div className="flex ">
            <DashNav />
            <AddCategoryForm />
        </div>
    );
}
