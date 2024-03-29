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
            let foodsSub = await getSingleCategory(param.id);
            setSubCategory(foodsSub);
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
                                imageSrc={food.image_url}
                            />
                        );
                    })
                ) : (
                    <div role="status" className="h-96 ">
                        <svg
                            aria-hidden="true"
                            class="text-center  w-20 h-20 mt-36 ml-96 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span class="sr-only">Loading...</span>
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
