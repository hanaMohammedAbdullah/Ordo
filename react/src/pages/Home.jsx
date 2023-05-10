import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import Category from "../components/Category";
import { getCategory, qrlogin } from "../service/apiServer";

export default function Home() {
    // write a code to hundle and await the qrlogin then fetch all the category if ther eis chaneg in the qrlogin then fetch the category again to be thenewset data without brakinhg the proimse
    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await qrlogin("login");
                const response2 = await getCategory(response1);
                setData(response2.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [refresh]);

    return (
        <Layout>
            <div>
                {categories &&
                    categories.map((category) => (
                        <Category
                            key={category.id}
                            id={category.name}
                            name={category.name}
                        />
                    ))}
            </div>
        </Layout>
    );
}
