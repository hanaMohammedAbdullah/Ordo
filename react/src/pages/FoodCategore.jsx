import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layouts/Layout";
import CategoryButtons from "../components/CategoryButtons";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";
export default function Lunch() {
    // gwt the id of the category from the url
    const { id } = useParams();
    // const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods.allFoods);
    return (
        <Layout>
            <CategoryButtons key={id} id={id} />
            <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
                {foods &&
                    foods.map((food) => {
                        return (
                            <FoodCard
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                imageSrc={
                                    "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                                }
                            />
                        );
                    })}
            </div>
        </Layout>
    );
}
