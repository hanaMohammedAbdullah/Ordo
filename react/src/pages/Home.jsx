import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import Category from "../components/Category";
import FoodsPage from "./FoodsPage";

export default function Home() {
    // const [data, setData] = useState(null);
    const [categories, setcategories] = useState([]);
    // const [qr, setQr] = useState("");
    // let data = qrlogin("jkdsajknjks");
    // setQr(data.then((res) => res.data)  );
    // console.log(qr);
    // let cat = getCategory(qr);

    // setcategories(cat);

    return (
        // <Layout>
        //     <div>
        //         {categories &&
        //             categories.map((category) => (
        //                 <Category
        //                     key={category.id}
        //                     id={category.name}
        //                     name={category.name}
        //                 />
        //             ))}
        //     </div>
        // </Layout>

        <FoodsPage />
    );
}
