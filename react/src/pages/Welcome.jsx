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
                <div className="   flex flex-col text-center">
                    <div className="p-10 text-center text-2xl text-yellow-500">
                        Welcome to the home page
                    </div>
                    <Link
                        className="w-1/6  border bg-orange-400 border-slate-600 rounded-md  my-10 mx-auto text-2xl text-slate-600"
                        to={"/home"}
                    >
                        Home
                    </Link>
                </div>
            </Layout>
        </div>
    );
};
