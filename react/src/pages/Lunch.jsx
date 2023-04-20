import React from "react";
import Layout from "../Layouts/Layout";
import CategoryButtons from "../components/CategoryButtons";
import FoodCard from "../components/FoodCard";

export default function Lunch() {
  return (
    <Layout>
      <CategoryButtons />
      <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
        <FoodCard name={'chicken'} price={'12'} imageSrc={'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg'} />
      </div>
    </Layout>
  );
}
