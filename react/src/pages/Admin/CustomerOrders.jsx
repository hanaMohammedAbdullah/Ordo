import React from "react";
import { DashNav } from "../../components/Admin/DashNav";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function CustomerOrders() {
    const orders = [
        {
            guestName: "John Doe",
            roomNumber: 101,
            orderQuantity: 3,
        },
        {
            guestName: "Jane Smith",
            roomNumber: 202,
            orderQuantity: 1,
        },
        {
            guestName: "Bob Johnson",
            roomNumber: 303,
            orderQuantity: 2,
        },
    ];
    return (
        <div className="flex">
            <DashNav />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>
                <table className="table-auto w-full ">
                    <thead className="bg-slate-300">
                        <tr>
                            <th className="px-4 py-2">Guest Name</th>
                            <th className="px-4 py-2">The Room </th>
                            <th className="px-4 py-2">Order Quantity</th>
                            <th className="px-4 py-2">More</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-50">
                        {orders.map((order) => (
                            <tr key={order.roomNumber}>
                                <td className="border px-4 py-2 text-center">
                                    {order.guestName}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {order.roomNumber}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {order.orderQuantity}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    <Link to="/more-details" className="">
                                        <button className=" text-black font-bold p-2  rounded-full border-2 border-black ">
                                            <BsThreeDotsVertical />{" "}
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
