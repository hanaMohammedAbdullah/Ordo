import React, { useEffect } from "react";
import { DashNav } from "../../components/Admin/DashNav";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAllOrder } from "../../service/apiServer";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../store/slice/admin/orderAdminSlice";
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
    console.log("this is orders in customer orders ", orders);
    return (
        <div className="flex">
            <DashNav />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Customer Orders</h1>
                <table className="table-auto w-full ">
                    <thead className="bg-slate-300">
                        <tr>
                            <th className="px-4 py-2">Desk Number</th>
                            <th className="px-4 py-2">Order Quantity</th>
                            <th className="px-4 py-2">More</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-50">
                        {orders.map((order) => (
                            <tr key={order.roomNumber}>
                                <td className="border px-4 py-2 text-center">
                                    {order.desk_number}
                                </td>

                                <td className="border px-4 py-2 text-center">
                                    {order.foodQuantity}
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
