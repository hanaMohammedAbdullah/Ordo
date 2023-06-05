import React from "react";
import { DashNav } from "../../components/Admin/DashNav";
import ProfileInfo from "../../components/Admin/ProfileInfo";
import { useParams } from "react-router-dom";

export default function MoreDetails() {
    const param = useParams();
    const handler = async () => {
        // const orders = await getOrders(param.id);
    };
    const orders = [
        {
            food: "Pizza",
            category: "meat",
            subCategory: "meat",
            quantity: 2,
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
        },
        {
            food: "hamburger",
            category: "meat",
            subCategory: "meat",
            quantity: 1,
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
        },
        {
            food: "Pasta",
            category: "meat",
            subCategory: "meat",
            quantity: 3,
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
        },
    ];
    return (
        <div className="flex">
            <DashNav />
            <div id="more-detail" className="w-full flex flex-col my-4">
                <div className="mx-4  flex justify-between ">
                    <ProfileInfo
                        category="C-22"
                        phoneNumber="0750 123 4567"
                        name={"Hana Mohamad"}
                        roomNumber="101"
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU"
                    />
                    <div className="flex h-12 border rounded-md">
                        <span className=" bg-slate-100 py-3 px-8">Status</span>
                        <select className="block appearance-none w-full bg-slate-100  hover:border-gray-500 px-8 py-2  leading-tight focus:outline-none focus:shadow-outline">
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="approved">Rejected</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col justify-center m-4">
                    <table className="table-auto w-full ">
                        <thead className="bg-slate-300">
                            <tr>
                                <th className="px-4 py-2">Food</th>
                                <th className="px-4 py-2">Category </th>
                                <th className="px-4 py-2">Sub category</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-slate-50">
                            {orders.map((order) => (
                                <tr key={order.category}>
                                    <td className="border px-4  text-center">
                                        {order.food}
                                    </td>
                                    <td className="border px-4  text-center">
                                        {order.category}
                                    </td>
                                    <td className="border px-4  text-center">
                                        {order.category}
                                    </td>
                                    <td className="border px-4  text-center">
                                        <img
                                            src={order.imageSrc}
                                            className="h-20  mx-auto"
                                            alt="food"
                                        />
                                    </td>

                                    <td className="border px-4  text-center">
                                        {order.quantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className=" mx-auto bg-yellow-300 font-bold text-black px-20 py-2 rounded-md my-4">
                        Archive
                    </button>
                </div>
            </div>
        </div>
    );
}
