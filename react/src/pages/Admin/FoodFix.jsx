import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaStar, FaTrash } from "react-icons/fa";
import { DashboardNavbar } from "../../components/Admin/DashboardNavbar";
import FeedBack from "../../components/FeedBack";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteSignleFood, getSignleFood } from "../../service/apiServer";
import { addFoodOrders } from "../../store/slice/admin/orderAdminSlice";
import FoodUpdate from "../../components/Admin/FoodUpdate";
import DeletePopup from "../../components/Admin/DeletePopup";

export const FoodFix = () => {
    const food = useSelector((state) => state.adminOrder.OrderFoodItems);
    // adminOrder: orderAdminSlice,
    console.log("thisis what retrive from the get ", food);
    const param = useParams();
    console.log(param.id);
    const dispatch = useDispatch();
    // const food = foods.filter((food) => food.id === parseInt(param.id))[0];
    const handler = async () => {
        const getfood = await getSignleFood(param.id);
        // console.log("this is get food in admin", getfood);
        dispatch(addFoodOrders(getfood));
        return getfood;
    };
     // navigate(-1);
    const navigate = useNavigate();
    const [foodUpdate, setFoodUpdate] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const deleteHundler = () => {
        setDeletePopup(true);

        // deleteSignleFood(food.id);
        // navigate(-1);
    };
    const updateHundler = () => {
        setFoodUpdate(true);
    };
    useEffect(() => {
        handler();
    }, []);
    // let feedback = [
    //     {
    //         id: 1,
    //         name: "Ahmed",
    //         comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
    //         accusamus dolorum sit assumenda ea, dignissimos explicabo est
    //         adipisci ut modi, accusantium perspiciatis! Illum voluptatibus
    //         iusto facere distinctio. Aut, illo laborum.`,
    //         rate: 4,
    //     },
    //     {
    //         id: 2,
    //         name: "Ahmed",
    //         comment: "Very good",
    //         rate: 4,
    //     },
    //     {
    //         id: 3,
    //         name: "Ahmed",
    //         comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
    //         accusamus dolorum sit assumenda ea, dignissimos explicabo est
    //         adipisci ut modi, accusantium perspiciatis! Illum voluptatibus
    //         iusto facere distinctio. Aut, illo laborum.`,
    //         rate: 4,
    //     },
    // ];
    return (
        <div>
            <DashboardNavbar />

            <div className="flex justify-between m-4">
                <div className=" w-1/3 h-fit  m-0 ">
                    <img
                        className="w-fit h-fit border rounded "
                        // height="100"
                        src={food.image_url}
                        alt={food.name}
                    />
                </div>
                <div className="flex flex-col w-2/3 h-fit  m-6   ">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold mb-5">
                                {food.name}
                            </h2>{" "}
                            <div className="flex  ">
                                <span className="flex text-lg">
                                    {`Timer ${food.time} mint `}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <p className="text-2xl font-semibold mt-5 mr-5">
                                {`$ ${food.price} `}
                            </p>
                            <button onClick={deleteHundler}>
                                <FaTrash className="text-red-500 text-2xl mx-4" />
                            </button>
                            <button onClick={updateHundler}>
                                <FaPencilAlt className="text-yellow-500 text-2xl" />
                            </button>
                        </div>
                    </div>
                    <hr className="mt-5 bg-gray-800  border-spacing-2.5 " />
                    <p className="text-2xl font-semibold">Description</p>
                    <p>{food.description}</p>
                </div>
            </div>

            <div
                className="flex flex-col m-5 text-2xl font-semibold
            "
            >
                {/* <p className="">FeedBacks</p> */}
                <div className="flex flex-wrap justify-evenly m-2">
                    {foodUpdate ? (
                        <FoodUpdate setShowModal={setFoodUpdate} />
                    ) : null}
                    {deletePopup ? (
                        <DeletePopup key={food.id} id={food.id} setShowModal={setDeletePopup} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
