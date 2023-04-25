import React from "react";
import Layout from "../Layouts/Layout";
import Category from "../components/Category";

export default function Home() {
  return (
    <Layout title={'Food orders'}>
      <div className="grid grid-cols-2">
        <Category />
      </div>
    </Layout>
  );
}
