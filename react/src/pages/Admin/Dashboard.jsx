import React from "react";
import FoodCartDashboard from "../../components/Admin/FoodCartDashboard";
import { DashNav } from "../../components/Admin/DashNav";

export const Dashboard = () => {
    let foods = [
        {
            id: 133,
            name: "Pizza",
            price: 10,
            imageSrc:
                "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg",
        },
        {
            id: 12,
            name: "Pizza",
            price: 10,
            imageSrc:
                "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg",
        },
    ];
    return (
        <>
            <div className="flex">
                <DashNav />
                <div className="container mx-auto mt-12">
                    <div className="grid m-2 grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        {/* <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total users
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                12,00
                            </div>
                        </div> */}
                        {/* <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Profit
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                $ 450k
                            </div>
                        </div> */}
                        {/* <div className="w-full m-2 px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Orders
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                20k
                            </div>
                        </div> */}
                        {foods &&
                            foods.map((food) => (
                                <FoodCartDashboard
                                    key={food.id}
                                    id={food.id}
                                    name={food.name}
                                    price={food.price}
                                    imageSrc={
                                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                                    }
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};
