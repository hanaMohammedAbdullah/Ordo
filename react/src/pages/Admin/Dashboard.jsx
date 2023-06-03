import React, { useEffect } from "react";
import FoodCartDashboard from "../../components/Admin/FoodCartDashboard";
import { DashNav } from "../../components/Admin/DashNav";
import { setFood } from "../../store/slice/foodsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "../../service/apiServer";

export const Dashboard = () => {
    const dispatch = useDispatch();
    const getHandler = async () => {
        let foods = await getAllFood();
        console.log("this is foods in dashboard ", foods);
        dispatch(setFood(foods));
    };
    useEffect(() => {
        getHandler();
    }, [dispatch]);

    const foods = useSelector((state) => state.foods.allFoods);
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
                        {foods && foods.length !== [] ? (
                            foods.map((food) => (
                                <FoodCartDashboard
                                    key={food.id}
                                    id={food.id}
                                    name={food.name}
                                    price={food.price}
                                    imageSrc={food.image_url}
                                />
                            ))
                        ) : (
                            <div className=" text-ceneter text-yellow-400 font-semibold text-2xl flex    p-32 ">
                                <p>loading....</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
