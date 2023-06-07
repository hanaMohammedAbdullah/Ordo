import React, { useEffect } from "react";
import { DashNav } from "../../components/Admin/DashNav";
import ProfileInfo from "../../components/Admin/ProfileInfo";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder, setUpdateOrder } from "../../service/apiServer";
import { addSingleOrder } from "../../store/slice/admin/OrderItemSlice";

export default function MoreDetails() {
    const navigate = useNavigate();
    const param = useParams();
    const dispatch = useDispatch();
    const [orders, setOrder] = React.useState({});
    const [changeStatus, setChangeStatus] = React.useState("");
    const getOrderHundelr = async () => {
        let Orders = await getSingleOrder(param.id);
        setOrder(Orders);
    };
    useEffect(() => {
        getOrderHundelr();
    }, []);
    const foods = structuredClone(orders.foods);
    const statusHandler = async (e) => {
        const status = e.target.value;
        console.log("this is change status", status);
        setUpdateOrder(param.id, status);
        navigate("/orders");
    };
    // const orders = [
    //     {
    //         food: "Pizza",
    //         category: "meat",
    //         subCategory: "meat",
    //         quantity: 2,
    //         imageSrc:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
    //     },
    //     {
    //         food: "hamburger",
    //         category: "meat",
    //         subCategory: "meat",
    //         quantity: 1,
    //         imageSrc:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
    //     },
    //     {
    //         food: "Pasta",
    //         category: "meat",
    //         subCategory: "meat",
    //         quantity: 3,
    //         imageSrc:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCUSmJEK9kC5KVqmQczHMH3OMcc_9BTTQ&usqp=CAU",
    //     },
    // ];
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
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPp1NOKIpzMxnbszZ73xZ-EQ2erJJ8vIN5g&usqp=CAU"
                    />
                    <Link
                        to="/orders"
                        className=" mx-auto bg-yellow-300 font-bold text-black px-20 py-2 rounded-md my-4"
                    >
                        Home Order
                    </Link>
                    <div className="flex h-12 border rounded-md">
                        <span className=" bg-orange-100 py-3 px-8">Status</span>
                        <select
                            value={changeStatus}
                            onChange={statusHandler}
                            className="block appearance-none w-full bg-orange-100  hover:border-yellow-500 px-8 py-2  leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="pending">Pending</option>
                            <option value="accepted">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col justify-center m-4">
                    <table className="table-auto w-full ">
                        <thead className="bg-yellow-300">
                            <tr>
                                <th className="px-4 py-2">Food</th>
                                <th className="px-4 py-2">Category </th>
                                <th className="px-4 py-2">Sub category</th>
                                <th className="px-4 py-2">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-yellow-50">
                            {foods &&
                                foods.length > 0 &&
                                foods.map((order) => (
                                    <tr key={order.category}>
                                        <td className="border px-4  text-center">
                                            {order.name}
                                        </td>
                                        <td className="border px-4  text-center">
                                            {order.categoryName}
                                        </td>
                                        <td className="border px-4  text-center">
                                            {order.subcategoryName}
                                        </td>

                                        <td className="border px-4  text-center">
                                            2
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
