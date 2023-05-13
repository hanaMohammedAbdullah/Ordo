import React from "react";
import Layout from "../Layouts/Layout";
import { Link, useParams } from "react-router-dom";
import { qrlogin } from "../service/apiServer";

export const Welcome = () => {
    let { desk } = useParams();
    qrlogin(desk);
    return (
        <div>
            <Layout>
                <div className=" flex flex-col text-center py-24">
                    <div className="p-10 text-center font-bold italic text-4xl text-yellow-500">
                        Welcome to the Ordo ,it is a pleasure to serve you
                    </div>
                    <Link
                        className="w-2/6 p-4  border bg-orange-400 border-slate-600 rounded-md  my-10 mx-auto text-2xl text-slate-600 "
                        to={"/home"}
                    >
                        Home
                    </Link>
                </div>
            </Layout>
        </div>
    );
};
