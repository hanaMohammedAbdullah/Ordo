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


    
    // console.log("dood  ", food);

    const getHandler = async () => {
        let data = await getSingleFood(id);
        // console.log("this data so be ", data);
        dispatch(setSingleFood(data));

        return data;
    };

    useEffect(() => {
        getHandler();
        // setFood(data);
        // console.log("s   econd ", data);
    }, []);

    // dispatch(getFood(id));
    // }, [id]);

    return (
        <>
            <Layout>
                {food && (
                    <div className="flex-col m-2">
                        <img
                            className=" rounded w-11/12 object-contain"
                            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="foodpic"
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
                            <div className="h-16 w-36 bg-orange-400  flex 	items-center rounded-lg mx-auto my-10">
                                <button
                                    onClick={() => setOrder(true)}
                                    className="flex text-xl font-bold text-black"
                                >
                                    <FaCartPlus className="h-6 w-6 " />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="h-16 w-11/12 bg-yellow-400  flex  justify-center	items-center rounded-lg mx-auto my-10">
                            <button
                                onClick={() => setAddingNote(true)}
                                ame="flex text-xl font-bold text-black"
                            >
                                FeedBack
                            </button>
                        </div>
                        {food &&
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
                )}
            </Layout>
        </>
    );
};

export default FoodDetail;
