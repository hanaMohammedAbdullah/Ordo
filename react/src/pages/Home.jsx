import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layouts/Layout";
import Category from "../components/Category";
import { getCategory } from "../service/apiServer";
import { setCategory } from "../store/slice/categorySlice";

export default function Home() {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.category);
    // console.log("first ", category);
    // console.log("first ", foods);
    const getHandler = async () => {
        let date = await getCategory();
        dispatch(setCategory(date));
        // console.log("secound ", category);
        return date;
    };
    // let data;
    useEffect(() => {
        getHandler();
    }, [dispatch]);
    return (
        <Layout>
            <div className="flex flex-wrap">
                {category.length === 0 ? (
                    <div className=" text-ceneter text-yellow-400 font-semibold text-2xl flex    p-32 ">
                        <p>loading....</p>
                    </div>
                ) : (
                    category[0]
                        .filter(
                            (item, index, self) =>
                                index ===
                                self.findIndex((t) => t.name === item.name)
                        )
                        .map((category) => (
                            <Category
                                key={category.id}
                                id={category.id}
                                name={category.name}
                            />
                        ))
                )}
            </div>
        </Layout>

        // <FoodsPage />
    );
}
