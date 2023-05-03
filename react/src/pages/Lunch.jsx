import React from "react";
import Layout from "../Layouts/Layout";
import CategoryButtons from "../components/CategoryButtons";
import FoodCard from "../components/FoodCard";
import { useSelector, useDispatch } from "react-redux";
export default function Lunch() {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods.allFoods);
    return (
        <Layout>
            <CategoryButtons />
            <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
                {foods &&
                    foods.map((food) => {
                        return (
                            <FoodCard
                                key={food.id}
                                name={food.name}
                                price={food.price}
                                imageSrc={food.image}
                            />
                        );
                    })}
                <FoodCard
                    name={"HANA"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
                <FoodCard
                    name={"chicken"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
                <FoodCard
                    name={"chicken"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
                <FoodCard
                    name={"chicken"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
                <FoodCard
                    name={"chicken"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
                <FoodCard
                    name={"chicken"}
                    price={"12"}
                    imageSrc={
                        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                    }
                />
            </div>
        </Layout>
    );
}
