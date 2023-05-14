import React, { useEffect, useState } from "react";
import { DashNav } from "../../components/Admin/DashNav";
import { useDispatch } from "react-redux";
import {
    getAllCategory,
    getAllFood,
    getAllSubCategory,
} from "../../service/apiServer";

export default function Menu() {
    const [foods, setFood] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const dispatch = useDispatch();
    const getHandler = async () => {
        let data = await getAllFood();
        let dataCategory = await getAllCategory();
        let dataSubCategory = await getAllSubCategory();

        // console.log("this is data", data);
        // dispatch(setFood(data));
        setCategory(dataCategory);
        setSubCategory(dataSubCategory);
        setFood(data);
        return data;
    };
    useEffect(() => {
        getHandler();
    }, [dispatch]);
    // careting a
    return (
        <>
            <div className="flex">
                <DashNav />
                <div className="container mx-auto mt-12">
                    <div className="grid m-2 grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        {/* { //category section} */}
                        <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="m-1 text-3xl font-semibold text-gray-900 ">
                                {/* mt-1 text-3xl font-semibold text-gray-900 */}
                                {category && category.length === 0
                                    ? "No Category Available"
                                    : "Total category       " +
                                      category.filter(
                                          (item, index, self) =>
                                              index ===
                                              self.findIndex(
                                                  (t) => t.name === item.name
                                              )
                                      ).length}
                            </div>
                            <div className="text-sm font-medium text-gray-500 truncate">
                                {category &&
                                    category
                                        .filter(
                                            (item, index, self) =>
                                                index ===
                                                self.findIndex(
                                                    (t) => t.name === item.name
                                                )
                                        )
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex flex-col"
                                            >
                                                <div className="text-sm font-medium text-gray-500 truncate">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                            </div>
                        </div>
                        {/* { //food section} */}
                        <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="m-1 text-3xl font-semibold text-gray-900 ">
                                {/* mt-1 text-3xl font-semibold text-gray-900 */}
                                {foods && foods.length === 0
                                    ? "No Food Available"
                                    : "Total Food       " + foods.length}
                            </div>
                            <div className="text-sm font-medium text-gray-500 truncate">
                                {foods &&
                                    foods.map((food) => (
                                        <div
                                            key={food.id}
                                            className="flex flex-col"
                                        >
                                            <div className="text-sm font-medium text-gray-500 truncate">
                                                {food.name}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/* { //subcategory section} */}
                        <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="m-1 text-3xl font-semibold text-gray-900 ">
                                {/* mt-1 text-3xl font-semibold text-gray-900 */}
                                {subcategory && subcategory.length === 0
                                    ? "No sub category  Available"
                                    : "Total Food       " +
                                      subcategory.filter(
                                          (item, index, self) =>
                                              index ===
                                              self.findIndex(
                                                  (t) => t.name === item.name
                                              )
                                      ).length}
                            </div>
                            <div className="text-sm font-medium text-gray-500 truncate">
                                {subcategory &&
                                    subcategory
                                        .filter(
                                            (item, index, self) =>
                                                index ===
                                                self.findIndex(
                                                    (t) => t.name === item.name
                                                )
                                        )
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex flex-col"
                                            >
                                                <div className="text-sm font-medium text-gray-500 truncate">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
