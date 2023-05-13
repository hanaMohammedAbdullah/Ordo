import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import Category from "../components/Category";
import FoodsPage from "./FoodsPage";
import { getCategory } from "../service/apiServer";
import { useEffect } from "react";

export default function Home() {
    // const [data, setData] = useState(null);
    const [categories, setcategories] = useState([]);

    // console.log(qr);
    let cat;
    // let cat = getCategory();
    // console.log("cat =  ckjnadsnckasnkl ", cat);
    // setcategories(cat);
    {
        useEffect(() => {
            let cats = getCategory();
            // console.log("cat =  ckjnadsnckasnkl ", cat);
            cats.then((data) => {
                console.log("data =  ckjnadsnckasnkl ", data);
                // cat = data;
                // console.log("cat =  ckjnadsnckasnkl ", cat);
                // setcategories(cat);
            });

            // dispatch(ha);
        }, []);
    }
    categories.then((data) => {
        console.log("data =  ckjnadsnckasnkl ", data);
        // cat = data;
        // console.log("cat =  ckjnadsnckasnkl ", cat);
        // setcategories(cat);
    });
    // console.log("cat =  ckjnadsnckasnkl ", categories   );
    return (
        <Layout>
            <div>
                {cat ? (
                    cat.map((category) => (
                        <Category
                            key={category.id}
                            id={category.name}
                            name={category.name}
                        />
                    ))
                ) : (
                    <div className="text-center text-2xl ">loading</div>
                )}
            </div>
        </Layout>

        // <FoodsPage />
    );
}
