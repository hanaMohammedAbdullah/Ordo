import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layouts/Layout";
import FoodCard from "../components/FoodCard";
import { getFoodList, getSingleCategory } from "../service/apiServer";
import { setFood } from "../store/slice/foodsSlice";
import { getAllSubCategory } from "../service/apiServer";
import { useParams } from "react-router-dom";

const FoodsPage = () => {
    // const [foods, setFood] = useState([]);
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foods.allFoods);
    const param = useParams();
    //get all foods from the store
    // console.log("first ", foods);
    const getHandler = async () => {
        let data = await getFoodList();
        dispatch(setFood(data));
        if (param.id !== undefined) {
            console.log("param.id", param.id);
            let foodsSub = await getSingleCategory(param.id);
            setSubCategory(foodsSub);
            console.log("foodsSub", foodsSub);
        }
        return data;
    };
    // let data;
    useEffect(() => {
        getHandler();
    }, [dispatch]);

    // make a usetsate for the subcategory
    const [subCategory, setSubCategory] = useState([]);
    return (
        <Layout>
            <div className="flex justify-between items-center">
                {subCategory !== [] && subCategory.length !== [] ? (
                    subCategory.map((sub) => {
                        return (
                            <div
                                key={sub.id}
                                className="bg-yellow-400 text-white font-semibold text-center rounded-md m-5 p-2"
                            >
                                {sub.name}
                            </div>
                        );
                    })
                ) : (
                    <div className=" text-ceneter text-yellow-400 font-semibold text-2xl flex mx-auto  ">
                        <p> </p>
                    </div>
                )}
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
                {foods && foods.length !== 0 ? (
                    foods.map((food) => {
                        return (
                            <FoodCard
                                key={food.id}
                                id={food.id}
                                deskNum={param.id}
                                name={food.name}
                                price={food.price}
                                imageSrc={
                                    "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                                }
                            />
                        );
                    })
                ) : (
                    <div className=" text-ceneter text-yellow-400 font-semibold text-2xl flex    p-32 ">
                        <p>loading....</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default FoodsPage;

// return <div></div>;
// };
// import { default as React, default as useEffect, useState } from "react";
// import Layout from "../Layouts/Layout";
// import FoodCard from "../components/FoodCard";
// import { getFoodList } from "../service/apiServer";
// export default function FoodsPage() {
// const dispatch = useDispatch();
// const foods = useSelector(selectAllFoods);
// const status = useSelector(selectFoodStatus);
// const error = useSelector(selectFoodError);
// const foods = useSelector((state) => state.foods.allFoods); //get all foods from the store
// const [foods, setFood] = useState([]);

// useEffect(() => {
//     // if (status === "idle") {
//     // dispatch(getHandler);
//     getHandler();
//     // console.log(data);
//     // setFood(data);
//     // }
// }, []);

// const getHandler = async () => {
//     let ha = await getFoodList();
//     return ha;
// };

// if (status === "loading") {
// return <div>Loading...</div>;
// }
// if (status === "error") {
// return <div>{error}</div>;
// }

//     return (
//         <Layout>
//             {/* <CategoryButtons key={id} id={id} /> */}
//             <div className=" grid grid-cols-2 sm:grid-cols-3 space-x-4">
//                 {foods ? (
//                     foods.map((food) => {
//                         return (
//                             <FoodCard
//                                 key={food.id}
//                                 id={food.id}
//                                 name={food.name}
//                                 price={food.price}
//                                 // imageSrc={
//                                 //     "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
//                                 // }
//                             />
//                         );
//                     })
//                 ) : (
//                     <div>loading</div>
//                 )}
//             </div>
//         </Layout>

//         // <pre>{foods}</pre>
//     );
// }
