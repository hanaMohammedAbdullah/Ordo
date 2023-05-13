import React from "react";
import Layout from "../Layouts/Layout";
import CategoryButtons from "../components/CategoryButtons";
import FoodCard from "../components/FoodCard";
import {
    selectAllFoods,
    selectFoodStatus,
    selectFoodError,
    getFoods,
} from "../store/slice/foodsSlice";
import { useDispatch, useSelector } from "react-redux";
import useEffect from "react";
export default function FoodsPage() {
    const dispatch = useDispatch();
    const foods = useSelector(selectAllFoods);
    const status = useSelector(selectFoodStatus);
    const error = useSelector(selectFoodError);

    // useEffect(() => {
    //     if (status === "idle") {
    //         dispatch(
    //             getFoods(
    //                 "d14a6bf083deda5ace96db32a7bacaff5e822a412e43feedf5b1503e99308e25"
    //             )
    //         );
    //     }
    // }, [status, dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>{error}</div>;
    }

    return (
        // <Layout>
        //     {/* <CategoryButtons key={id} id={id} /> */}
        //     <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
        //         {foods &&
        //             foods.map((food) => {
        //                 return (
        //                     <FoodCard
        //                         key={food.id}
        //                         id={food.id}
        //                         name={food.name}
        //                         price={food.price}
        //                         imageSrc={
        //                             "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
        //                         }
        //                     />
        //                 );
        //             })}
        //     </div>
        // </Layout>

        <pre>{foods}</pre>
    );
}
