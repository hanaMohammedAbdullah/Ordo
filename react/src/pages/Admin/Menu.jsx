import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { DashNav } from "../../components/Admin/DashNav";
import {
    getAllCategory,
    getAllSubCategory,
    setDeleteCategory,
} from "../../service/apiServer";
import CategoryFix from "../../components/Category/CategoryFix";
import SubCategoryFix from "../../components/Category/SubCategoryFix";

export default function Menu() {
    const [subcateUp, setsubcateUp] = useState(false);
    const [cateUp, setcateUp] = useState(false);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const dispatch = useDispatch();
    const getHandler = async () => {
        let dataCategory = await getAllCategory();
        let dataSubCategory = await getAllSubCategory();

        // console.log("this is data", data);
        // dispatch(setFood(data));
        setCategory(dataCategory);
        setSubCategory(dataSubCategory);
    };
    useEffect(() => {
        getHandler();
    }, []);
    const subcateupdateHandler = async (id) => {
        setsubcateUp(true);
    };
    const cateupdateHandler = async (id) => {
        setcateUp(true);
        // await setcateUp(id);
        // let dataCategory = await getAllCategory();
        // let dataSubCategory = await getAllSubCategory();
        // // console.log("this is data", data);
        // // dispatch(setFood(data));
        // setCategory(dataCategory);
        // setSubCategory(dataSubCategory);
    };

    const deleteHundler = async (id) => {
        await setDeleteCategory(id);
        let dataCategory = await getAllCategory();
        let dataSubCategory = await getAllSubCategory();
        // console.log("this is data", data);
        // dispatch(setFood(data));
        setCategory(dataCategory);
        setSubCategory(dataSubCategory);
    };
    return (
        <>
            <div className="flex">
                <DashNav />
                <div className="container mx-auto mt-12">
                    <div className=" flex flex-col  mx-5">
                        {/* { //category section} */}
                        <h1 className="text-3xl font-semibold">Category</h1>
                        {category && category.length !== 0 ? (
                            <table className="table-auto w-full rounded my-5">
                                <thead className="bg-yellow-200">
                                    <tr>
                                        <th className="px-4 py-2 text-2xl    ">
                                            Name Category
                                        </th>
                                        <th className="px-4 py-2 text-2xl">
                                            Update Category
                                        </th>
                                        <th className="px-4 py-2 text-2xl">
                                            Delete Category
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white-50">
                                    {category
                                        .filter(
                                            (item, index, self) =>
                                                index ===
                                                self.findIndex(
                                                    (t) => t.name === item.name
                                                )
                                        )
                                        .map((item) => (
                                            <tr key={item.id}>
                                                <td className="border px-4 py-2 text-center">
                                                    {item.name}
                                                </td>

                                                <td className="border px-4 py-2 text-center">
                                                    <button
                                                        onClick={
                                                            cateupdateHandler
                                                        }
                                                    >
                                                        <FaPencilAlt className="text-yellow-500 text-2xl" />
                                                    </button>
                                                </td>
                                                <td className="border px-4 py-2 text-center">
                                                    <button
                                                        onClick={deleteHundler}
                                                    >
                                                        <FaTrash className="text-red-500 text-2xl mx-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="flex w-full  justify-center my-5  items-center">
                                <h1 className="text-2xl  text-center font-bold">
                                    No Category Available
                                </h1>
                            </div>
                        )}

                        {/* { //subcategory section} */}
                        <h1 className="text-3xl font-semibold my-2">
                            SubCategory
                        </h1>
                        {subcategory && subcategory.length !== 0 ? (
                            <table className="table-auto w-full rounded ">
                                <thead className="bg-yellow-200">
                                    <tr>
                                        <th className="px-4 py-2 text-2xl    ">
                                            Name subcategory
                                        </th>
                                        <th className="px-4 py-2 text-2xl">
                                            Update subcategory
                                        </th>
                                        <th className="px-4 py-2 text-2xl">
                                            Delete subcategory
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white-50">
                                    {subcategory
                                        .filter(
                                            (item, index, self) =>
                                                index ===
                                                self.findIndex(
                                                    (t) => t.name === item.name
                                                )
                                        )
                                        .map((item) => (
                                            <tr key={item.id}>
                                                <td className="border px-4 py-2 text-center">
                                                    {item.name}
                                                </td>

                                                <td className="border px-4 py-2 text-center">
                                                    <button
                                                        onClick={
                                                            subcateupdateHandler
                                                        }
                                                    >
                                                        <FaPencilAlt className="text-yellow-500 text-2xl" />
                                                    </button>
                                                </td>
                                                <td className="border px-4 py-2 text-center">
                                                    <button
                                                        onClick={deleteHundler}
                                                    >
                                                        <FaTrash className="text-red-500 text-2xl mx-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="flex w-full  justify-center  items-center">
                                <h1 className="text-2xl  text-center font-bold">
                                    No Subcategory Available
                                </h1>
                            </div>
                        )}
                        {cateUp ? (
                            <CategoryFix setShowModal={setcateUp} />
                        ) : null}
                        {subcateUp ? (
                            <SubCategoryFix setShowModal={setsubcateUp} />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
