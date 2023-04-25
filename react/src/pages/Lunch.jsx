import React from "react";
import Layout from "../Layouts/Layout";
import CategoryButtons from "../components/CategoryButtons";
import FoodCard from "../components/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Lunch() {
  const [foods, setFoods] = useState([]);
  console.log(foods);

  const API_KEY = "7e300d20b34346268330e41bbc9c2c47";

  useEffect(() => {
    async function fetchFoods() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
      );
      setFoods(response.data.recipes);
    }
    fetchFoods();
  }, []);

  return (
    <Layout title={"Lunch foods"}>
      <CategoryButtons />
      <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            title={food.title}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>
    </Layout>
  );
}
