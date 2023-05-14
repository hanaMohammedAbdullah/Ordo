import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layouts/Layout";
import { getCategory } from "../service/apiServer";
import { setCategory } from "../store/slice/categorySlice";
import Category from "../components/Category/Category";

export default function Home() {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.category);
    const getHandler = async () => {
        let date = await getCategory();
        dispatch(setCategory(date));
        return date;
    };
    useEffect(() => {
        getHandler();
    }, [dispatch]);
    return (
        <Layout>
            <div className="grid grid-cols-2">
                {category && category.length === 0 ? (
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
