import React, { useEffect } from "react";
import { DashNav } from "../../components/Admin/DashNav";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAllOrder } from "../../service/apiServer";
import { useDispatch, useSelector } from "react-redux";
import {
    addFoodOrders,
    addToOrder,
} from "../../store/slice/admin/orderAdminSlice";
import { addSingleOrder } from "../../store/slice/admin/OrderItemSlice";
export default function CustomerOrders() {
    const dispatch = useDispatch();
    const getOrderHundelr = async () => {
        let Orders = await getAllOrder();
        // console.log("this is orders in customer orders ", Orders[0].data);
        dispatch(addToOrder(Orders));
    };
    useEffect(() => {
        getOrderHundelr();
    }, []);

    const orders = useSelector((state) => state.adminOrder.OrderItems);

    return (
        <div className="flex">
            <DashNav />

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>
                {orders && (
                    <table className="table-auto w-full ">
                        <thead className="bg-yellow-300">
                            <tr>
                                <th className="px-4 py-2">Desk Number</th>
                                <th className="px-4 py-2">Order status</th>
                                <th className="px-4 py-2">More</th>
                            </tr>
                        </thead>
                        <tbody className="bg-yellow-50">
                            {orders && orders !== undefined ? (
                                orders.map((order) => (
                                    <tr key={order.cart_id}>
                                        <td className="border px-4 py-2 text-center">
                                            {order.desk_number}
                                        </td>

                                        <td className="border px-4 py-2 text-center">
                                            {order.status}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <Link
                                                to={`/more-details/${order.id}`}
                                                className=""
                                            >
                                                <button className=" text-black font-bold p-2  rounded-full border-2 border-black ">
                                                    <BsThreeDotsVertical />{" "}
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div className="flex justify-center items-center">
                                    <h1 className="text-2xl font-bold">
                                        No Orders
                                    </h1>
                                </div>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            {!orders && (
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-bold">No Orders</h1>
                </div>
            )}
        </div>
    );
}
