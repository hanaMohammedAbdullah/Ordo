import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layout";
import FeedBack from "../components/FeedBack";
import FoodNote from "../components/FeedBackNote";
import Order from "../components/Orders";
import { getSingleFood } from "../service/apiServer";
import { setSingleFood } from "../store/slice/foodsSlice";
const FoodDetail = () => {
    const [addingNote, setAddingNote] = useState(false);
    const [order, setOrder] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const food = useSelector((state) => state.foods.singleFood); //get all foods from the store

    const getHandler = async () => {
        let data = await getSingleFood(id);
        dispatch(setSingleFood(data));

        return data;
    };

    useEffect(() => {
        getHandler();
    }, []);

    return (
        <>
            <Layout>
                {food && food.name !== undefined ? (
                    <div className="flex-col m-2">
                        <img
                            className=" rounded w-11/12 object-contain"
                            src={food.image_url}
                            alt={food.name}
                        />
                        <h2 className="text-2xl font-bold	">{food.name}</h2>
                        <div className="flex w-1/3 justify-evenly 	 ">
                            <p className="">{food.feedbacks_avg_rating}</p>
                            <p className="text-slate-500	 ">review</p>
                        </div>
                        <h2 className="text-lg font-semibold mt-2	">
                            Description
                        </h2>
                        <p className="m-2">{food.description}</p>
                        <div className="flex  mt-2  items-center  content-between			 ">
                            <p className="text-slate-500	 ">Total : </p>
                            <h3 className="text-2xl font-bold	 ">
                                {" "}
                                {food.price}$
                            </h3>
                            <button
                                onClick={() => setOrder(true)}
                                className="h-16 w-36 bg-orange-400  flex 	items-center rounded-lg mx-auto my-10"
                            >
                                <div className="flex text-xl font-bold text-black">
                                    <FaCartPlus className="h-6 w-6 " />
                                    Add to Cart
                                </div>
                            </button>
                        </div>
                        <button
                            onClick={() => setAddingNote(true)}
                            className="h-16 w-11/12 bg-yellow-400  flex  justify-center	items-center rounded-lg mx-auto my-10"
                        >
                            <div ame="flex text-xl font-bold text-black">
                                FeedBack
                            </div>
                        </button>
                        {food.feedbacks !== undefined &&
                            food.feedbacks.map((food) => {
                                return (
                                    <FeedBack
                                        key={food.id}
                                        username={food.username}
                                        description={food.description}
                                        rating={food.rating}
                                    />
                                );
                            })}

                        {addingNote ? (
                            <FoodNote
                                food={food}
                                setShowModal={setAddingNote}
                            />
                        ) : null}
                        {order ? (
                            <Order food={food} setShowModal={setOrder} />
                        ) : null}
                    </div>
                ) : (
                    <div role="status" className="h-96 ">
                        <svg
                            aria-hidden="true"
                            class="text-center  w-20 h-20 mt-36 ml-96 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                )}
            </Layout>
        </>
    );
};

export default FoodDetail;
