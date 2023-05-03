import React from "react";
import Layout from "../Layouts/Layout";
import HomeButton from "../components/HomeButton";

export default function Home() {
    return (
        <Layout>
            <div className="flex-col  justify-center ">
                <h2 className="text-orange-400	font-semibold text-xl m-8 flex	justify-center">
                    404
                </h2>
                <div className="w-3/4 m-auto ">
                    <p className="m-2">
                        Oops! Look likes something going wrong
                    </p>
                    <p className="m-2">
                        Page Cannot be found! we’ll have it figured out in no
                        time. Menwhile, cheek out these fresh ideas:
                    </p>
                    <HomeButton />
                </div>
            </div>
        </Layout>
    );
}
